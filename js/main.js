let main = ()=> {
    // Support Test
    const supportsContainerQueries = "container" in document.documentElement.style;

    // Conditional Import
    if (!supportsContainerQueries) {
        import("https://cdn.skypack.dev/container-query-polyfill");
    }

    // Init Split
    Split(['#panelMain', '#panelPlayground'], {
        sizes: [60, 40],
        minSize: [800, 400],
        maxSize: [Infinity, 800],
        expandToMin: true,
        gutterSize: 1,
    });

    //JSON Data
    let about = document.querySelector('#about');
    let welcome = document.querySelector('#welcomeMessage');
    about.innerHTML = json2html.render(sm, templates.about);
    welcome.innerHTML = json2html.render(sm, welcomeMessage);

    if (sm[0].tables) {
        let tables = document.querySelector('#viewLogicalTables');
        let navTables = document.querySelector('#logical-tables-nav');
        let countTables = document.querySelectorAll('#logicalTablesCount');

        tables.innerHTML = json2html.render(sm[0].tables, templates.table);
        navTables.innerHTML = json2html.render(sm[0].tables, table_nav);
        countTables.forEach((e) => {
            e.innerHTML = sm[0].tables.length;
        });
    }

    if (sm[0].relationships) {
        let relationships = document.querySelector('#viewRelationships');
        let navRelationship = document.querySelector('#relationships-nav');
        let countRelationships = document.querySelectorAll('#relationshipsCount');

        relationships.innerHTML = json2html.render(sm[0].relationships, templates.relationship);
        navRelationship.innerHTML = json2html.render(sm[0].relationships, relationship_nav);
        countRelationships.forEach((e) => {
            e.innerHTML = sm[0].relationships.length;
        });
    }

    if (sm[0].verified_queries) {
        let verifiedQueries = document.querySelector('#viewVerifiedQueries');
        let navVerifiedQueries = document.querySelector('#verified-queries-nav');
        let countVerifiedQueries = document.querySelectorAll('#verifiedQueriesCount');
        let l = sm[0].verified_queries.length;;

        verifiedQueries.innerHTML = json2html.render(sm[0].verified_queries, templates.verified_query);
        navVerifiedQueries.innerHTML = json2html.render(sm[0].verified_queries, query_nav);
        countVerifiedQueries.forEach((e) => {
            e.innerHTML = l;
        });
    }

    //TOC 
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0.8) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    }, {
        threshold: 0.8
    });
    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    });

    const observerTable = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0.1) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1
    });    
    document.querySelectorAll('.table').forEach((sub_section) => {
        observerTable.observe(sub_section);
    });

    const observerRelationship = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio == 1) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    }, {
        threshold: 1
    });    
    document.querySelectorAll('.relationship').forEach((sub_section) => {
        observerRelationship.observe(sub_section);
    });

    const observerVerifiedQuery = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio == 1) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    }, {
        threshold: 1
    });    
    document.querySelectorAll('.verifiedQuery').forEach((sub_section) => {
        observerVerifiedQuery.observe(sub_section);
    });
    
    let scrollArea = document.querySelector('#semanticModel');
    scrollArea.addEventListener('scroll', (e) => {
        let toc = document.querySelector('#toc');
        if (e.target.scrollTop == 0) {
            if (!toc.classList.contains('top')) {
                toc.classList.add('top');
            }
        }
        else {
            if (toc.classList.contains('top')) {
                toc.classList.remove('top');
            }
        }
    }, false);

    //Code
    PR.prettyPrint();

    //Zippy
    let collables = document.querySelectorAll('.collapse');
    collables.forEach(e => {
        $(e).on('hidden.bs.collapse', f => {
            f.target.parentElement.classList.add('hidden');
        });
        $(e).on('show.bs.collapse', f => {
            f.target.parentElement.classList.remove('hidden');
        });
    });

    // Edit
    let form= {
        'time_dimension': {},
        'dimensions': {},
        'measure': {}
    };

    let openForm = (e) => {
        let block = e.target.parentElement.parentElement.parentElement;
        let el = block.parentElement;
        window.location.href = '#' + el.getAttribute('id');
        el.classList.add('editing');
        el.classList.add('openning');
        
        let initHeight = block.offsetHeight - 32;
        block.style.height = initHeight + 'px';
        block.setAttribute('data-init-height', initHeight);
        
        let space = block.querySelector('.editSpace');
        let editType = el.getAttribute('data-field-type');
        space.innerHTML = json2html.render(form.measure, edit[editType]);

        let formHeight = space.offsetHeight;
        block.style.height = formHeight + 'px';

        let btnCancel = space.querySelector('#btnCancel');
        btnCancel.addEventListener('click', (e) => {
            closeForm(e, el, block, space);
        }, false);

        setTimeout(() => {
            el.classList.remove('openning');
            el.classList.add('show');
        }, 200);
    };

    let closeForm = (e, el, block, space) => {
        el.classList.remove('show');
        el.classList.add('closing');
        block.style.height = block.getAttribute('data-init-height') + 'px';
        space.innerHTML = '';

        setTimeout(() => {
            el.classList.remove('editing');
            el.classList.remove('closing');
            block.style.height = 'auto';
        }, 200);
    };

    let btn_edit = document.querySelectorAll('.btnEdit');
    btn_edit.forEach(b => {
        b.addEventListener('click', openForm, false);
    });

    // Base Tables
    let baseTables = [];
    sm[0].tables.forEach( e => {
        baseTables.push({
            'database': e.base_table.database,
            'schema': e.base_table.schema,
            'table': e.base_table.table
        });
    });
    
    let divBaseTables = document.querySelector('#baseTables');
    divBaseTables.innerHTML = '<h4>Base tables</h4>' 
        + json2html.render(baseTables, base_table);

    // Relationships in table
    let relationships = {};
    if (sm[0].relationships) {
        sm[0].relationships.forEach( e => {
            if (!relationships[e.left_table]) {
                relationships[e.left_table] = [];
            }
            if (!relationships[e.right_table]) {
                relationships[e.right_table] = [];
            }
            relationships[e.left_table].push(e);
            relationships[e.right_table].push(e);
        });
        for (const p in relationships) {
            let v = document.querySelector(`#relationshipsPreview_${p}`);
            v.innerHTML = '<h4>Relationships</h4>';
            v.innerHTML += json2html.render(relationships[p], relationships_preview);
            v.style.display = 'block';
        }
    }

    // Toggling ToC
    let btnToggleToC = document.querySelector('#btnToggleToC');
    let viewSemanticModel = document.querySelector('#viewSemanticModel');
    btnToggleToC.addEventListener('click', () => {
        if (viewSemanticModel.classList.contains('tocOpened')) {
            viewSemanticModel.classList.remove('tocOpened');
        }
        else {
            viewSemanticModel.classList.add('tocOpened');
        }
    });
};
window.addEventListener('load', main, false);
