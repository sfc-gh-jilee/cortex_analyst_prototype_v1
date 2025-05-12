let sm = [{
    "name": "Sales Data",
    "description": "This semantic model can be used for asking questions over the sales data.",
    "tables": [
      {
        "name": "sales_data",
        "description": "A logical table capturing daily sales information across different store locations and product categories.",
        "base_table": {
          "database": "sales",
          "schema": "public",
          "table": "sd_data"
        },
        "dimensions": [
          {
            "name": "product_category",
            "synonyms": [
              "item_category",
              "product_type"
            ],
            "description": "The category of the product sold.",
            "expr": "cat",
            "data_type": "NUMBER",
            "unique": false,
            "sample_values": [
              "501",
              "544"
            ]
          },
          {
            "name": "store_country",
            "description": "The country where the sale took place.",
            "expr": "cntry",
            "data_type": "TEXT",
            "unique": false,
            "sample_values": [
              "USA",
              "GBR"
            ]
          },
          {
            "name": "sales_channel",
            "synonyms": [
              "channel",
              "distribution_channel"
            ],
            "description": "The channel through which the sale was made.",
            "expr": "chn",
            "data_type": "TEXT",
            "unique": false,
            "sample_values": [
              "FB",
              "GOOGLE"
            ]
          }
        ],
        "time_dimensions": [
          {
            "name": "sale_timestamp",
            "synonyms": [
              "time_of_sale",
              "transaction_time"
            ],
            "description": "The time when the sale occurred. In UTC.",
            "expr": "dt",
            "data_type": "TIMESTAMP",
            "unique": false
          }
        ],
        "measures": [
          {
            "name": "sales_amount",
            "synonyms": [
              "revenue",
              "total_sales"
            ],
            "description": "The total amount of money generated from the sale.",
            "expr": "amt",
            "data_type": "NUMBER",
            "default_aggregation": "sum"
          },
          {
            "name": "sales_tax",
            "description": "The sales tax paid for this sale.",
            "expr": "amt * 0.0975",
            "data_type": "NUMBER",
            "default_aggregation": "sum"
          },
          {
            "name": "units_sold",
            "synonyms": [
              "quantity_sold",
              "number_of_units"
            ],
            "description": "The number of units sold in the transaction.",
            "expr": "unts",
            "data_type": "NUMBER",
            "default_aggregation": "sum"
          },
          {
            "name": "cost",
            "description": "The cost of the product sold.",
            "expr": "cst",
            "data_type": "NUMBER",
            "default_aggregation": "sum"
          },
          {
            "name": "profit",
            "synonyms": [
              "earnings",
              "net income"
            ],
            "description": "The profit generated from a sale.",
            "expr": "amt - cst",
            "data_type": "NUMBER",
            "default_aggregation": "sum"
          }
        ],
        "filters": [
          {
            "name": "north_america",
            "synonyms": [
              "North America",
              "N.A.",
              "NA"
            ],
            "description": "A filter to restrict only to north american countries",
            "expr": "cntry IN ('canada', 'mexico', 'usa')"
          }
        ]
      }
    ]
  }]