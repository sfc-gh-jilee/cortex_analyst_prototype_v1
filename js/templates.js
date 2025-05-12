json2html.component.add('actions', {'<>': 'div', 'class': 'actions', 'html': [
    {'<>': 'button', 'id': 'btnEdit', 'class': 'small tertiary btnEdit', 'html': 'Edit', 'onclick': (e)=> {
        console.log(this);
    }},
    {'<>': 'button', 'id': 'btnDelete', 'class': 'small tertiary iconOnly btnRemove', 'html': '<span class="icon delete"></span>', 'onclick': (e)=> {
        console.log(this);
    }}
]});

json2html.component.add('time_dimensions', {'<>': 'div', 'id': 'field_${name}', 'class': 'field timeDimension', 'data-field-type': 'time_dimension', 'html': [
    {'html': '<div class="block">'},
    {'<>': 'div', 'class': 'name', 'html': [
        {'html': '<span class="icon type_${data_type}" data-info="Data type: ${data_type}"></span>'},
        {'html': '<h5>${name}</h5>'},
        {'html': '&#183;'},
        {'<>': 'span', 'class': 'synonyms', 'data-info': 'Synonyms: ${synonyms}', 'html': [
            {'html': function() {
                let s = '';
                if (this.synonyms) {
                    s += this.synonyms.join(',&nbsp;');
                }
                else {
                    s += '<a href="#">Missing synonyms</a>';
                }
                return s;
            }}
        ]},
        {'[]': 'actions'}
    ]},
    {'<>': 'div', 'class':'info', 'html': [
        {'html': '<p>${description}</p>'},
        {'<>': 'div', 'class': 'metadata', 'html': [
            {'<>': 'span', 'class': 'expression', 'data-info': 'Expression: ${expr}', 'html': '${expr}'}
        ]}
    ]},
    {'html': '<div id="edit_field_${name}" class="editSpace"></div>'},
    {'html': '</div>'}
]});

json2html.component.add('dimensions', {'<>': 'div', 'id': 'field_${name}', 'class': 'field dimension', 'data-field-type': 'dimension', 'html': [
    {'html': '<div class="block">'},
    {'<>': 'div', 'class': 'name', 'html': [
        {'html': '<span class="icon type_${data_type}" data-info="Data type: ${data_type}"></span>'},
        {'html': '<h5>${name}</h5>'},
        {'html': '&#183;'},
        {'<>': 'span', 'class': 'synonyms', 'data-info': 'Synonyms: ${synonyms}', 'html': [
            {'html': function() {
                let s = '';
                if (this.synonyms) {
                    s += this.synonyms.join(',&nbsp;');
                }
                else {
                    s += '<a href="#">Missing synonyms</a>';
                }
                return s;
            }}
        ]},
        {'[]': 'actions'}
    ]},
    {'<>': 'div', 'class':'info', 'html': [
        {'html': '<p>${description}</p>'},
        {'<>': 'div', 'class': 'metadata', 'html': [
            {'<>': 'span', 'class': 'expression', 'data-info': 'Expression: ${expr}', 'html': '${expr}'}
        ]}
    ]},
    {'html': '<div id="edit_field_${name}" class="editSpace"></div>'},
    {'html': '</div>'}
]});

json2html.component.add('measures', {'<>': 'div', 'id': 'field_${name}', 'class': 'field measure', 'data-field-type': 'measure', 'html': [
    {'html': '<div class="block">'},
    {'<>': 'div', 'class': 'name', 'html': [
        {'html': '<span class="icon type_${data_type}" data-info="Data type: ${data_type}"></span>'},
        {'html': '<h5>${name}</h5>'},
        {'html': '&#183;'},
        {'<>': 'span', 'class': 'synonyms', 'data-info': 'Synonyms: ${synonyms}', 'html': [
            {'html': function() {
                let s = '';
                if (this.synonyms) {
                    s += this.synonyms.join(',&nbsp;');
                }
                else {
                    s += '<a href="#">Missing synonyms</a>';
                }
                return s;
            }}
        ]},
        {'[]': 'actions'}
    ]},
    {'<>': 'div', 'class':'info', 'html': [
        {'html': '<p>${description}</p>'},
        {'<>': 'div', 'class': 'metadata', 'html': [
            {'<>': 'span', 'class': 'expression', 'data-info': 'Expression: ${expr}', 'html': '${expr}'}
        ]}
    ]},
    {'html': '<div id="edit_field_${name}" class="editSpace"></div>'},
    {'html': '</div>'}
]});

let table_nav = {'<>': 'li', 'class': 'sub', html: [
    {'<>': 'a', 'href': '#table_${name}', 'html': '<span>${name}</span>'}
]};

let relationship_nav = {'<>': 'li', 'class': 'sub', html: [
    {'<>': 'a', 'href': '#relationship_${name}', 'html': '<span>${name}</span>'}
]};

let query_nav = {'<>': 'li', 'class': 'sub', html: [
    {'<>': 'a', 'href': '#query_${name}', 'html': '<span>${name}</span>'}
]};

let base_table = {'html': '<div class="baseTable" data-info="Base table: ${database}.${schema}.${table}"><span class="icon ph_table"></span> ${database}.${schema}.${table}</div>'};

let templates = {
    'about': {'<>': 'div', 'class': 'block', 'html': [
        {'html': '<div class="label top">Semantic model</div>'},
        {'html': '<h1>${name}</h1>'},
        {'html': '<p>${description}</p>'},
        {'html': '<div id="baseTables"></div>'},
        {'[]': 'actions'}
    ]},
    'table': {'<>': 'div', 'id': 'table_${name}', 'class': 'subSection table hidden', 'data-field-type': 'table', 'html': [
        {'<>': 'div', 'class': 'block tableBlock', 'html': [
            {'<>': 'div', 'class': 'name', 'html': [
                {'html': '<button class="small tertiary iconOnly btnToggleTable" data-toggle="collapse" data-target="#collapseTable_${name}" aria-expanded="false" aria-controls="collapseTable_${name}"><span class="icon logical-table"></span><span class="icon chevron-collapse"></span><span class="icon chevron-expand"></span></button>'},
                {'html': '<h3>${name}</h3>'},
                {'[]': 'actions'}
            ]},
            {'<>': 'div', 'class':'info', 'html': [
                {'html': '<p>${description}</p>'},
                {'html': '<div class="baseTable" data-info="Base table: ${base_table.database}.${base_table.schema}.${base_table.table}"><span class="icon ph_table"></span> ${base_table.database}.${base_table.schema}.${base_table.table}</div>'}
            ]},
            {'html': '<div id="edit_field_${name}" class="editSpace"></div>'}
        ]},
        {'html': '<div class="fade collapse" id="collapseTable_${name}">'},
        {'html': '<div id="relationshipsPreview_${name}" class="relationshipsPreview" style="display: none;"></div>'},
        {'<>': 'div', 'class': 'fields', 'html': [
            {'<>': 'div', 'class': 'fieldHeader', 'html': [
                {'html': '<button class="small tertiary iconOnly" data-toggle="collapse" data-target="#collapseTimeDimensions_${name}" aria-expanded="false" aria-controls="collapseTimeDimensions_${name}"><span class="icon chevron-down"></span></button>'},
                {'html': function() {
                    let c = 0;
                    if (this.time_dimensions) {
                        c = this.time_dimensions.length;
                    }
                    return `<h4>Time dimensions <span class="label count" style="margin-left: 8px;">${c}</span></h4>`;
                }},
            ]},
            {'html': '<div class="fade collapse" id="collapseTimeDimensions_${name}">'},
            {'[]': 'time_dimensions', '{}': function() { return(this.time_dimensions); }},
            {'html': '</div>'}
        ]},
        {'<>': 'div', 'class': 'fields', 'html': [
            {'<>': 'div', 'class': 'fieldHeader', 'html': [
                {'html': '<button class="small tertiary iconOnly" data-toggle="collapse" data-target="#collapseDimensions_${name}" aria-expanded="false" aria-controls="collapseDimensions_${name}"><span class="icon chevron-down"></span></button>'},
                {'html': function() {
                    let c = 0;
                    if (this.dimensions) {
                        c = this.dimensions.length;
                    }
                    return `<h4>Dimensions <span class="label count" style="margin-left: 8px;">${c}</span></h4>`;
                }},
            ]},
            {'html': '<div class="fade collapse" id="collapseDimensions_${name}">'},
            {'[]': 'dimensions', '{}': function() { return(this.dimensions); }},
            {'html': '</div>'}
        ]},
        {'<>': 'div', 'class': 'fields', 'html': [
            {'<>': 'div', 'class': 'fieldHeader', 'html': [
                {'html': '<button class="small tertiary iconOnly" data-toggle="collapse" data-target="#collapseMeasures_${name}" aria-expanded="false" aria-controls="collapseMeasures_${name}"><span class="icon chevron-down"></span></button>'},
                {'html': function() {
                    let c = 0;
                    if (this.measures) {
                        c = this.measures.length;
                    }
                    return `<h4>Measures <span class="label count" style="margin-left: 8px;">${c}</span></h4>`;
                }},
            ]},
            {'html': '<div class="fade collapse" id="collapseMeasures_${name}">'},
            {'[]': 'measures', '{}': function() { return(this.measures); }},
            {'html': '</div>'}
        ]},
        {'html': '</div>'}
    ]},
    'relationship': {'<>': 'div', 'id': 'relationship_${name}', 'class': 'subSection relationship', 'html': [
        {'<>': 'div', 'class': 'block', 'html': [
            {'<>': 'div', 'class': 'name', 'html': [
                {'html': '<button class="small tertiary iconOnly"><span class="icon join"></span></button>'},
                {'html': '<h3>${name}</h3>'},
                {'[]': 'actions'}
            ]},
            {'<>': 'div', 'class':'info', 'html': [
                {'html': '<div class="leftAndRight"><div class="joinLeft"><span class="joinPosition">Left</span><span class="joinTable"><a href="#table_${left_table}">${left_table}</a></span><span class="joinColumn"><a href="#field_'},
                {'html': function() { return(this.relationship_columns[0].left_column); } },
                {'html': '">'},
                {'html': function() { return(this.relationship_columns[0].left_column); } },
                {'html': '</a></span></div>'},
                {'html': '<span _class="icon join-regular">&#8212;</span>'},
                {'html': '<div class="joinRight"><span class="joinPosition">Right</span><span class="joinTable"><a href="#table_${right_table}">${right_table}</a></span><span class="joinColumn"><a href="#field_'},
                {'html': function() { return(this.relationship_columns[0].right_column); } },
                {'html': '">'},
                {'html': function() { return(this.relationship_columns[0].right_column); } },
                {'html': '</a></span></div></div>'},
                {'<>': 'div', 'class': 'metadata', 'html': [
                    {'<>': 'span', 'class': 'joinType', 'html': 'Join: ${join_type}'},
                    {'html': '&nbsp;&nbsp;&#183;&nbsp;&nbsp;'},
                    {'<>': 'span', 'class': 'relationshipType', 'html': 'Relationship: ${relationship_type}'}
                ]},
            ]}
        ]},
    ]},
    'verified_query': {'<>': 'div', 'id': 'query_${name}', 'class': 'subSection verifiedQuery', 'html': [
        {'<>': 'div', 'class': 'block', 'html': [
            {'<>': 'div', 'class': 'name', 'html': [
                {'html': '<button class="small tertiary iconOnly" data-toggle="collapse" data-target="#collapseQuery_${verified_at}" aria-expanded="false" aria-controls="collapseQuery_${verified_at}"><span class="icon verified-query"></span><span class="icon chevron-collapse"></span><span class="icon chevron-expand"></span></button>'},
                {'html': '<h3>${question}</h3>'},
                {'[]': 'actions'}
            ]},
            {'<>': 'div', 'class':'info', 'html': [
                {'html': '<p data-info="Name: ${name}">${name}</p>'},
            ]},
            {'html': '<div class="fade collapse" id="collapseQuery_${verified_at}"><div class="codeWrapper"><pre class="prettyprint"><code class="language-sql">${sql}</code></pre></div></div>'}
        ]},
    ]}
};

let relationships_preview = {'<>': 'div', 'class': 'leftAndRight', 'data-info': 'Relationship name: ${name}, Join: ${join_type}, Relationship: ${relationship_type}', 'html': [
    {'html': '<span class="icon join-regular"></span>'},
    {'html': '<div class="joinLeft"><span class="joinPosition">Left</span><span class="joinTable"><a href="#table_${left_table}">${left_table}</a></span><span class="joinColumn"><a href="#field_'},
    {'html': function() { return(this.relationship_columns[0].left_column); } },
    {'html': '">'},
    {'html': function() { return(this.relationship_columns[0].left_column); } },
    {'html': '</a></span></div>'},
    {'html': '<span>&#8212;</span>'},
    {'html': '<div class="joinRight"><span class="joinPosition">Right</span><span class="joinTable"><a href="#table_${right_table}">${right_table}</a></span><span class="joinColumn"><a href="#field_'},
    {'html': function() { return(this.relationship_columns[0].right_column); } },
    {'html': '">'},
    {'html': function() { return(this.relationship_columns[0].right_column); } },
    {'html': '</a></span></div>'}
]};

let edit = {
    'time_dimension': {'html': [
        {'<>': 'div', 'class': 'editFormHeader', 'html': [
            {'html': '<h3>Edit time dimension</h3>'},
            {'html': '<div class="editInfo"><span class="icon type_number"></span> nation_key</div>'},
        ]},
        {'<>': 'form', 'html': [
            {'<>': 'div', 'class': 'formInner', 'html': [
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputExpression', 'html': 'Expression'},
                    {'<>': 'input', 'type': 'text', 'name': 'inputExpression'}
                ]},
                {'<>': 'div', 'class': 'formGrid', 'html': [
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputMeasureName', 'html': 'Measure name'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputMeasureName'}
                    ]},
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputSynonyms', 'html': 'Synonyms'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputSynonyms'}
                    ]},
                ]},
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputMeasureDesc', 'html': 'Measure description'},
                    {'<>': 'input', 'type': 'text', 'name': 'inputMeasureDesc'}
                ]},
                {'<>': 'div', 'class': 'formGrid', 'html': [
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputDataType', 'html': 'Data type'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputDataType'}
                    ]},
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputSampleValues', 'html': 'Sample values'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputSampleValues'}
                    ]},
                ]},
                {'<>': 'div', 'class': 'formActions', 'html': [
                    {'<>': 'button', 'id': 'btnSubmit', 'class': 'primary', 'html': 'Save'},
                    {'<>': 'button', 'id': 'btnCancel', 'class': 'secondary', 'html': 'Cancel'},
                ]},
            ]}
        ]}
    ]},
    'dimension': {'html': [
        {'<>': 'div', 'class': 'editFormHeader', 'html': [
            {'html': '<h3>Edit dimension</h3>'},
            {'html': '<div class="editInfo"><span class="icon type_number"></span> nation_key</div>'},
        ]},
        {'<>': 'form', 'html': [
            {'<>': 'div', 'class': 'formInner', 'html': [
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputExpression', 'html': 'Expression'},
                    {'<>': 'input', 'type': 'text', 'name': 'inputExpression'}
                ]},
                {'<>': 'div', 'class': 'formGrid', 'html': [
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputMeasureName', 'html': 'Measure name'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputMeasureName'}
                    ]},
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputSynonyms', 'html': 'Synonyms'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputSynonyms'}
                    ]},
                ]},
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputMeasureDesc', 'html': 'Measure description'},
                    {'<>': 'input', 'type': 'text', 'name': 'inputMeasureDesc'}
                ]},
                {'<>': 'div', 'class': 'formGrid', 'html': [
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputDataType', 'html': 'Data type'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputDataType'}
                    ]},
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputSampleValues', 'html': 'Sample values'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputSampleValues'}
                    ]},
                ]},
                {'<>': 'div', 'class': 'formActions', 'html': [
                    {'<>': 'button', 'id': 'btnSubmit', 'class': 'primary', 'html': 'Save'},
                    {'<>': 'button', 'id': 'btnCancel', 'class': 'secondary', 'html': 'Cancel'},
                ]},
            ]}
        ]}
    ]},
    'measure': {'html': [
        {'<>': 'div', 'class': 'editFormHeader', 'html': [
            {'html': '<h3>Edit measure</h3>'},
            {'html': '<div class="editInfo"><span class="icon type_number"></span> nation_key</div>'},
        ]},
        {'<>': 'form', 'html': [
            {'<>': 'div', 'class': 'formInner', 'html': [
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputExpression', 'html': 'Expression'},
                    {'<>': 'input', 'type': 'text', 'name': 'inputExpression'}
                ]},
                {'<>': 'div', 'class': 'formGrid', 'html': [
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputMeasureName', 'html': 'Measure name'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputMeasureName'}
                    ]},
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputSynonyms', 'html': 'Synonyms'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputSynonyms'}
                    ]},
                ]},
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputMeasureDesc', 'html': 'Measure description'},
                    {'<>': 'input', 'type': 'text', 'name': 'inputMeasureDesc'}
                ]},
                {'<>': 'div', 'class': 'formGrid', 'html': [
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputDataType', 'html': 'Data type'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputDataType'}
                    ]},
                    {'<>': 'div', 'class': 'inputWrapper', 'html': [
                        {'<>': 'label', 'for': 'inputSampleValues', 'html': 'Sample values'},
                        {'<>': 'input', 'type': 'text', 'name': 'inputSampleValues'}
                    ]},
                ]},
                {'<>': 'div', 'class': 'formActions', 'html': [
                    {'<>': 'button', 'id': 'btnSubmit', 'class': 'primary', 'html': 'Save'},
                    {'<>': 'button', 'id': 'btnCancel', 'class': 'secondary', 'html': 'Cancel'},
                ]},
            ]}
        ]}
    ]},
    'table': {'html': [
        {'<>': 'div', 'class': 'editFormHeader', 'html': [
            {'html': '<h3>Edit table</h3>'},
            {'html': '<div class="editInfo"><span class="icon ph_table"></span> customers</div>'},
        ]},
        {'<>': 'form', 'html': [
            {'<>': 'div', 'class': 'formInner', 'html': [
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputTableName', 'html': 'Logical table name'},
                    {'<>': 'input', 'type': 'text', 'name': 'inputTableName'}
                ]},
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputTableDesc', 'html': 'Logical table description'},
                    {'<>': 'textarea', 'name': 'inputTableDesc'}
                ]},
                {'<>': 'div', 'class': 'inputWrapper', 'html': [
                    {'<>': 'label', 'for': 'inputSynonyms', 'html': 'Synonyms'},
                    {'<>': 'input', 'type': 'text', 'name': 'inputSynonyms'}
                ]},
                {'<>': 'div', 'class': 'formActions', 'html': [
                    {'<>': 'button', 'id': 'btnSubmit', 'class': 'primary', 'html': 'Save'},
                    {'<>': 'button', 'id': 'btnCancel', 'class': 'secondary', 'html': 'Cancel'},
                ]},
            ]}
        ]}
    ]},
};

let welcomeMessage = {'<>': 'div', 'html': [
    {'<>': 'div', 'class': 'badge', 'html': [
        {'<>': 'div', 'class': 'largeIcon semantic-model'},
    ]},
    {'<>': 'div', 'class': 'about', 'html': [
        {'<>': 'h1', 'html': '${name}'},
        {'<>': 'p', 'html': '${description}'}
    ]},
]};