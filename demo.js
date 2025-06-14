let sm = [{
    "name": "snow_tpch",
    "description": "Order data from the TPCH dataset.",
    "tables": [
      {
        "name": "customers",
        "description": "The customers table contains details about individual customers, including their unique customer identifier, name, address, account balance, and market segment.  It is used to analyze customer demographics, purchasing behavior, and segmentation.   Join this table with orders and lineitem tables to track sales performance and customer order history.\n",
        "base_table": {
          "database": "SNOWFLAKE_SAMPLE_DATA",
          "schema": "TPCH_SF1",
          "table": "CUSTOMER"
        },
        "dimensions": [
          {
            "name": "customer_key",
            "description": "Unique identifier for each customer.",
            "expr": "C_CUSTKEY",
            "data_type": "NUMBER",
            "unique": true,
            "sample_values": [
              "1",
              "60035",
              "149891"
            ]
          },
          {
            "name": "nation_key",
            "description": "Foreign key from the nations table",
            "expr": "C_NATIONKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "14",
              "10"
            ]
          },
          {
            "name": "customer_name",
            "synonyms": [
              "customer_name",
              "customer"
            ],
            "description": "Name of the customer.",
            "expr": "C_NAME",
            "data_type": "TEXT",
            "sample_values": [
              "Customer#000060003",
              "Customer#000060007"
            ]
          },
          {
            "name": "customer_market_segment",
            "synonyms": [
              "market segment"
            ],
            "description": "The market segment for this customer",
            "expr": "C_MKTSEGMENT",
            "data_type": "TEXT",
            "sample_values": [
              "AUTOMOBILE",
              "BUILDING",
              "MACHINERY",
              "HOUSEHOLD",
              "FURNITURE"
            ]
          }
        ],
        "measures": [
          {
            "name": "customer_account_balance",
            "description": "Customer account balance",
            "expr": "C_ACCTBAL",
            "data_type": "NUMBER",
            "sample_values": [
              "711.56",
              "121.65"
            ]
          }
        ],
        "filters": [
          {
            "name": "automobile_market_segment",
            "synonyms": [
              "Automobile Segment",
              "Automobile Customers"
            ],
            "description": "A filter to retrieve customers in the AUTOMOBILE market segment.",
            "expr": "customer_market_segment = \"AUTOMOBILE\""
          },
          {
            "name": "top_10_customers_by_higest_account_balance",
            "synonyms": [
              "Top 10 highest customer balance"
            ],
            "description": "A filter to retrieve the top 10 customers with the highest account balance.",
            "expr": "customer_key IN (\n  SELECT customer_key \n  FROM __customers \n  ORDER BY customer_account_balance DESC \n  LIMIT 10\n)\n"
          }
        ],
        "primary_key": {
          "columns": [
            "customer_key"
          ]
        }
      },
      {
        "name": "order_lineitems",
        "description": "The lineitems table contains details of individual items within orders, including part numbers, quantities, and discounts. \n",
        "base_table": {
          "database": "SNOWFLAKE_SAMPLE_DATA",
          "schema": "TPCH_SF1",
          "table": "LINEITEM"
        },
        "dimensions": [
          {
            "name": "order_key",
            "description": "Foreign key column from the Orders table",
            "expr": "L_ORDERKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "1800164",
              "1800193"
            ]
          },
          {
            "name": "order_lineitem_number",
            "description": "Line Item Number within each order. Combined with order_key this forms the unique key for order_lineitems table",
            "expr": "L_LINENUMBER",
            "data_type": "NUMBER",
            "sample_values": [
              "4",
              "1"
            ]
          },
          {
            "name": "part_key",
            "description": "Part Key",
            "expr": "L_PARTKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "22275",
              "106173"
            ]
          },
          {
            "name": "supplier_key",
            "description": "Supplier Key",
            "expr": "L_SUPPKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "1525",
              "9327"
            ]
          },
          {
            "name": "lineitem_return_flag",
            "synonyms": [
              "item return flag",
              "item return indicator"
            ],
            "description": "Return Flag for Line Item",
            "expr": "L_RETURNFLAG",
            "data_type": "TEXT",
            "sample_values": [
              "N",
              "A",
              "R"
            ]
          },
          {
            "name": "lineitem_status",
            "synonyms": [
              "item status"
            ],
            "description": "Order Line Item Fulfillment Status",
            "expr": "L_LINESTATUS",
            "data_type": "TEXT",
            "sample_values": [
              "O",
              "F"
            ]
          },
          {
            "name": "lineitem_shipping_instructions",
            "synonyms": [
              "ship instruction code",
              "shipping instruction"
            ],
            "description": "Shipping Instructions",
            "expr": "L_SHIPINSTRUCT",
            "data_type": "TEXT",
            "sample_values": [
              "COLLECT COD",
              "NONE",
              "DELIVER IN PERSON",
              "TAKE BACK RETURN"
            ]
          },
          {
            "name": "lineitem_shipping_mode",
            "synonyms": [
              "lineitem shipping mode",
              "item shipp mode"
            ],
            "description": "Order Lineitem Shipping Mode",
            "expr": "L_SHIPMODE",
            "data_type": "TEXT",
            "sample_values": [
              "AIR",
              "FOB",
              "MAIL",
              "REG AIR",
              "TRUCK",
              "SHIP",
              "RAIL"
            ]
          }
        ],
        "time_dimensions": [
          {
            "name": "lineitem_ship_date",
            "synonyms": [
              "item ship date",
              "item shipping date"
            ],
            "description": "Order line item Date of shipment",
            "expr": "L_SHIPDATE",
            "data_type": "DATE",
            "sample_values": [
              "1996-01-19",
              "1997-08-19"
            ]
          },
          {
            "name": "lineitem_commit_date",
            "synonyms": [
              "item commit date"
            ],
            "description": "Order lineitem Date of Commitment",
            "expr": "L_COMMITDATE",
            "data_type": "DATE",
            "sample_values": [
              "1992-05-20",
              "1994-01-03"
            ]
          },
          {
            "name": "lineitem_receipt_date",
            "synonyms": [
              "item receipt date"
            ],
            "description": "Date of receipt for each order line item",
            "expr": "L_RECEIPTDATE",
            "data_type": "DATE",
            "sample_values": [
              "1997-06-10",
              "1998-03-23"
            ]
          }
        ],
        "measures": [
          {
            "name": "lineitem_quantity",
            "synonyms": [
              "item quantity"
            ],
            "description": "Quantity of items ordered",
            "expr": "L_QUANTITY",
            "data_type": "NUMBER",
            "sample_values": [
              "48.00",
              "38.00"
            ]
          },
          {
            "name": "lineitem_extended_price",
            "synonyms": [
              "item extended price",
              "net revenue pre discount",
              "base price"
            ],
            "description": "Extended price of the Order Line Item for all of the lineitem quantity. This number is before tax and discount.",
            "expr": "L_EXTENDEDPRICE",
            "data_type": "NUMBER",
            "default_aggregation": "sum",
            "sample_values": [
              "61821.92",
              "43098.84"
            ]
          },
          {
            "name": "lineitem_discount",
            "synonyms": [
              "discount"
            ],
            "description": "Discount percentage applied to each order line item",
            "expr": "L_DISCOUNT",
            "data_type": "NUMBER",
            "sample_values": [
              "0.05",
              "0.01"
            ]
          },
          {
            "name": "lineitem_tax",
            "synonyms": [
              "item tax"
            ],
            "description": "Order lineitem Sales Tax Rate",
            "expr": "L_TAX",
            "data_type": "NUMBER",
            "sample_values": [
              "0.04",
              "0.07"
            ]
          },
          {
            "name": "net_revenue",
            "synonyms": [
              "revenue",
              "discounted price",
              "net price"
            ],
            "description": "The net extended price of the order line after discount, but before tax.",
            "expr": "l_extendedprice * (1 - l_discount)",
            "data_type": "NUMBER",
            "default_aggregation": "sum"
          },
          {
            "name": "gross_revenue",
            "synonyms": [
              "total_price",
              "revenue after tax"
            ],
            "description": "The net extended price of the order line after discount, but before tax.",
            "expr": "l_extendedprice * (1 - l_discount) * (1+l_tax)",
            "data_type": "NUMBER",
            "default_aggregation": "sum"
          }
        ],
        "primary_key": {
          "columns": [
            "order_key",
            "order_lineitem_number"
          ]
        }
      },
      {
        "name": "orders",
        "description": "The orders table contains information about customer orders, including the order date, priority, and status. \n",
        "base_table": {
          "database": "SNOWFLAKE_SAMPLE_DATA",
          "schema": "TPCH_SF1",
          "table": "ORDERS"
        },
        "dimensions": [
          {
            "name": "order_key",
            "description": "Unique identifier for each order",
            "expr": "O_ORDERKEY",
            "data_type": "NUMBER",
            "unique": true,
            "sample_values": [
              "1800006",
              "1800864"
            ]
          },
          {
            "name": "customer_key",
            "description": "Foreign key from Customer Table",
            "expr": "O_CUSTKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "44485",
              "129200"
            ]
          },
          {
            "name": "order_status",
            "description": "Order Status",
            "expr": "O_ORDERSTATUS",
            "data_type": "TEXT",
            "sample_values": [
              "P",
              "O",
              "F"
            ]
          },
          {
            "name": "order_priority",
            "description": "Priority level assigned to an order",
            "expr": "O_ORDERPRIORITY",
            "data_type": "TEXT",
            "sample_values": [
              "1-URGENT",
              "2-HIGH",
              "3-MEDIUM",
              "4-NOT SPECIFIED",
              "5-LOW"
            ]
          }
        ],
        "time_dimensions": [
          {
            "name": "order_date",
            "description": "Date of Order",
            "expr": "O_ORDERDATE",
            "data_type": "DATE",
            "sample_values": [
              "1995-12-27",
              "1995-09-22"
            ]
          }
        ],
        "measures": [
          {
            "name": "order_gross_total",
            "synonyms": [
              "order total price",
              "order total with tax"
            ],
            "description": "Total Order Value after discount and including taxes. This is the sum of gross_revenue for all line items in the order.",
            "expr": "O_TOTALPRICE",
            "data_type": "NUMBER",
            "default_aggregation": "sum",
            "sample_values": [
              "294964.49",
              "225465.88"
            ]
          },
          {
            "name": "order_ship_priority",
            "synonyms": [
              "shipping priority"
            ],
            "description": "Shipping Priority of the Order",
            "expr": "O_SHIPPRIORITY",
            "data_type": "NUMBER",
            "sample_values": [
              "0"
            ]
          },
          {
            "name": "total_orders",
            "description": "The total number of orders.",
            "expr": "COUNT(*)",
            "data_type": "NUMBER"
          }
        ],
        "primary_key": {
          "columns": [
            "order_key"
          ]
        },
        "filters": [
          {
            "name": "Yesterday",
            "synonyms": [
              "Prior Day",
              "Day before",
              "Previous Day"
            ],
            "description": "A filter to restrict data to only yesterday.",
            "expr": "order_date = '1998-08-01'"
          },
          {
            "name": "YTD",
            "synonyms": [
              "This Year",
              "Current Year",
              "Year to Date",
              "TY"
            ],
            "description": "A filter to restrict data to only current fiscal year.",
            "expr": "DATE_PART('YEAR', order_date) = '1998'"
          }
        ]
      },
      {
        "name": "part_suppliers",
        "description": "The partsupp table contains information linking parts to suppliers, including part keys, supplier keys, and supply costs.\n",
        "base_table": {
          "database": "SNOWFLAKE_SAMPLE_DATA",
          "schema": "TPCH_SF1",
          "table": "PARTSUPP"
        },
        "dimensions": [
          {
            "name": "part_key",
            "description": "Foreign key from the parts table",
            "expr": "PS_PARTKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "20001",
              "20007"
            ]
          },
          {
            "name": "supplier_key",
            "description": "Foreign key from the supplier table",
            "expr": "PS_SUPPKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "5031",
              "2525"
            ]
          }
        ],
        "measures": [
          {
            "name": "available_quantity",
            "description": "The inventory of parts in stock for each supplier",
            "synonyms": [
              "available quantity",
              "inventory",
              "stock"
            ],
            "expr": "PS_AVAILQTY",
            "data_type": "NUMBER",
            "sample_values": [
              "3818",
              "8666"
            ]
          },
          {
            "name": "part_supplier_cost",
            "synonyms": [
              "supplier cost",
              "part cost"
            ],
            "description": "The cost of the part from a given supplier",
            "expr": "PS_SUPPLYCOST",
            "data_type": "NUMBER",
            "sample_values": [
              "195.44",
              "630.37"
            ]
          }
        ],
        "primary_key": {
          "columns": [
            "part_key",
            "supplier_key"
          ]
        }
      },
      {
        "name": "parts",
        "description": "The parts table contains details about parts that suppliers offer, including unique part keys, names, and types. A part could be supplied from multple suppliers. \n",
        "base_table": {
          "database": "SNOWFLAKE_SAMPLE_DATA",
          "schema": "TPCH_SF1",
          "table": "PART"
        },
        "dimensions": [
          {
            "name": "part_key",
            "description": "Unique identifier for each part",
            "expr": "P_PARTKEY",
            "data_type": "NUMBER",
            "unique": true,
            "sample_values": [
              "120002",
              "120003"
            ]
          },
          {
            "name": "part_name",
            "description": "name of the parts",
            "expr": "P_NAME",
            "data_type": "TEXT",
            "sample_values": [
              "yellow hot rose blue green",
              "yellow pale blanched gainsboro moccasin",
              "turquoise floral papaya steel blanched",
              "maroon olive sky honeydew sienna",
              "forest rose orchid mint lime",
              "deep coral honeydew cornsilk dodger",
              "seashell ghost grey red mint",
              "sandy medium red rose coral",
              "orange frosted azure rosy goldenrod",
              "salmon cream deep hot white",
              "beige grey honeydew coral burlywood",
              "puff pale metallic cream red",
              "rosy burnished tomato goldenrod gainsboro",
              "lime antique rose seashell magenta",
              "saddle azure steel magenta dark",
              "puff firebrick spring peru cornflower",
              "bisque ghost spring blanched frosted",
              "papaya dark forest chocolate olive",
              "midnight linen orange dark plum",
              "blanched grey blush sandy dim",
              "chocolate lemon linen aquamarine beige",
              "firebrick goldenrod sky maroon forest",
              "violet thistle olive sandy indian",
              "grey bisque pink honeydew papaya",
              "blue pale antique thistle sky"
            ]
          },
          {
            "name": "part_manufacturer_name",
            "synonyms": [
              "manufacturer"
            ],
            "description": "Manufacture name of this part",
            "expr": "P_MFGR",
            "data_type": "TEXT",
            "sample_values": [
              "Manufacturer#3",
              "Manufacturer#1",
              "Manufacturer#4"
            ]
          },
          {
            "name": "part_brand",
            "description": "Brand Names of the part",
            "expr": "P_BRAND",
            "data_type": "TEXT",
            "sample_values": [
              "Brand#15",
              "Brand#24",
              "Brand#25"
            ]
          },
          {
            "name": "part_type",
            "description": "type of the part",
            "expr": "P_TYPE",
            "data_type": "TEXT",
            "cortex_search_service_name": "my_part_types_search_service"
          },
          {
            "name": "part_container",
            "description": "Container Types for each part",
            "expr": "P_CONTAINER",
            "data_type": "TEXT",
            "sample_values": [
              "WRAP CAN",
              "SM DRUM",
              "LG JAR",
              "WRAP JAR",
              "SM PKG",
              "JUMBO BOX",
              "JUMBO DRUM",
              "MED PKG",
              "SM BOX",
              "LG PKG",
              "JUMBO CAN",
              "WRAP PACK",
              "MED CASE",
              "JUMBO JAR",
              "SM PACK",
              "WRAP CASE",
              "LG CASE",
              "SM BAG",
              "LG DRUM",
              "MED BAG",
              "LG CAN",
              "WRAP BOX",
              "JUMBO BAG",
              "SM CAN",
              "MED DRUM"
            ]
          },
          {
            "name": "part_size",
            "description": "Size of the part",
            "expr": "P_SIZE",
            "data_type": "NUMBER",
            "sample_values": [
              "38",
              "48",
              "41",
              "45",
              "46"
            ]
          }
        ],
        "measures": [
          {
            "name": "part_retail_price",
            "synonyms": [
              "part price"
            ],
            "description": "Retail Price of the part",
            "expr": "P_RETAILPRICE",
            "data_type": "NUMBER",
            "sample_values": [
              "1021.00",
              "1023.00",
              "1027.00"
            ]
          },
          {
            "name": "total_parts",
            "description": "The total number of parts.",
            "expr": "COUNT(*)",
            "data_type": "NUMBER",
            "default_aggregation": "count"
          }
        ],
        "primary_key": {
          "columns": [
            "part_key"
          ]
        }
      },
      {
        "name": "suppliers",
        "description": "The suppliers table contains details about suppliers, including unique supplier keys, supplier names, addresses, and associated nations.\n",
        "base_table": {
          "database": "SNOWFLAKE_SAMPLE_DATA",
          "schema": "TPCH_SF1",
          "table": "SUPPLIER"
        },
        "dimensions": [
          {
            "name": "supplier_key",
            "description": "Unique identifier for each supplier",
            "expr": "S_SUPPKEY",
            "data_type": "NUMBER",
            "unique": true,
            "sample_values": [
              "1",
              "2"
            ]
          },
          {
            "name": "supplier_name",
            "description": "Name of the supplier",
            "expr": "S_NAME",
            "data_type": "TEXT",
            "sample_values": [
              "Supplier#000000001",
              "Supplier#000000002"
            ]
          },
          {
            "name": "nation_key",
            "description": "Foreign key from the nations table",
            "expr": "S_NATIONKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "17",
              "5",
              "1"
            ]
          }
        ],
        "measures": [
          {
            "name": "supplier_account_balance",
            "synonyms": [
              "supplier balance"
            ],
            "description": "Supplier Account Balance",
            "expr": "S_ACCTBAL",
            "data_type": "NUMBER",
            "sample_values": [
              "5755.94",
              "4032.68"
            ]
          }
        ],
        "primary_key": {
          "columns": [
            "supplier_key"
          ]
        }
      },
      {
        "name": "nations",
        "description": "The nations table contains details about various countries, including a unique identifier for each nation, its name, and a reference to the region it belongs to.  Each nation is uniquely identified by N_NATIONKEY.\n",
        "base_table": {
          "database": "SNOWFLAKE_SAMPLE_DATA",
          "schema": "TPCH_SF1",
          "table": "NATION"
        },
        "dimensions": [
          {
            "name": "nation_key",
            "description": "Unique identifier for each nation",
            "expr": "N_NATIONKEY",
            "data_type": "NUMBER",
            "unique": true,
            "sample_values": [
              "0",
              "1",
              "2"
            ]
          },
          {
            "name": "region_key",
            "description": "Foreign key from the regions table",
            "expr": "N_REGIONKEY",
            "data_type": "NUMBER",
            "sample_values": [
              "2",
              "4"
            ]
          },
          {
            "name": "nation_name",
            "description": "List of nations/countries",
            "expr": "N_NAME",
            "data_type": "TEXT",
            "sample_values": [
              "ALGERIA",
              "ARGENTINA",
              "BRAZIL",
              "CANADA",
              "EGYPT",
              "ETHIOPIA",
              "FRANCE",
              "GERMANY",
              "INDIA",
              "INDONESIA",
              "IRAQ",
              "JORDAN",
              "KENYA",
              "MOROCCO",
              "PERU",
              "SAUDI ARABIA",
              "UNITED STATES",
              "RUSSIA",
              "UNITED KINGDOM",
              "MOZAMBIQUE",
              "VIETNAM",
              "IRAN",
              "JAPAN",
              "CHINA",
              "ROMANIA"
            ]
          }
        ],
        "filters": [
          {
            "name": "North America",
            "synonyms": [
              "NA Region"
            ],
            "description": "A filter to restrict data to only North American Continent",
            "expr": "nation_name IN ('UNITED STATES','CANADA')"
          }
        ],
        "primary_key": {
          "columns": [
            "nation_key"
          ]
        }
      },
      {
        "name": "regions",
        "description": "The regions table contains details about various geographic regions, each uniquely identified by a region key.  Each region can have multiple nations associated with it. There are a total of 5 regions.\n",
        "base_table": {
          "database": "SNOWFLAKE_SAMPLE_DATA",
          "schema": "TPCH_SF1",
          "table": "REGION"
        },
        "dimensions": [
          {
            "name": "region_key",
            "description": "Unique identifier for Region",
            "expr": "R_REGIONKEY",
            "data_type": "NUMBER",
            "unique": true,
            "sample_values": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ]
          },
          {
            "name": "region_name",
            "description": "Geographic region of the world. Name of the region.",
            "expr": "R_NAME",
            "data_type": "TEXT",
            "sample_values": [
              "AFRICA",
              "AMERICA",
              "ASIA",
              "EUROPE",
              "MIDDLE EAST"
            ]
          }
        ],
        "measures": [
          {
            "name": "total_regions",
            "description": "The total number of regions.",
            "expr": "COUNT(*)",
            "data_type": "NUMBER",
            "default_aggregation": "count"
          }
        ],
        "primary_key": {
          "columns": [
            "region_key"
          ]
        }
      }
    ],
    "relationships": [
      {
        "name": "nations_to_regions",
        "left_table": "nations",
        "right_table": "regions",
        "relationship_columns": [
          {
            "left_column": "region_key",
            "right_column": "region_key"
          }
        ],
        "join_type": "left_outer",
        "relationship_type": "many_to_one"
      },
      {
        "name": "suppliers_to_nations",
        "left_table": "suppliers",
        "right_table": "nations",
        "relationship_columns": [
          {
            "left_column": "nation_key",
            "right_column": "nation_key"
          }
        ],
        "join_type": "left_outer",
        "relationship_type": "many_to_one"
      },
      {
        "name": "customers_to_nations",
        "left_table": "customers",
        "right_table": "nations",
        "relationship_columns": [
          {
            "left_column": "nation_key",
            "right_column": "nation_key"
          }
        ],
        "join_type": "left_outer",
        "relationship_type": "many_to_one"
      },
      {
        "name": "orders_to_customers",
        "left_table": "orders",
        "right_table": "customers",
        "relationship_columns": [
          {
            "left_column": "customer_key",
            "right_column": "customer_key"
          }
        ],
        "join_type": "left_outer",
        "relationship_type": "many_to_one"
      },
      {
        "name": "lineitems_to_orders",
        "left_table": "order_lineitems",
        "right_table": "orders",
        "relationship_columns": [
          {
            "left_column": "order_key",
            "right_column": "order_key"
          }
        ],
        "join_type": "left_outer",
        "relationship_type": "many_to_one"
      },
      {
        "name": "part_suppliers_to_part",
        "left_table": "part_suppliers",
        "right_table": "parts",
        "relationship_columns": [
          {
            "left_column": "part_key",
            "right_column": "part_key"
          }
        ],
        "join_type": "left_outer",
        "relationship_type": "many_to_one"
      },
      {
        "name": "part_suppliers_to_supplier",
        "left_table": "part_suppliers",
        "right_table": "suppliers",
        "relationship_columns": [
          {
            "left_column": "supplier_key",
            "right_column": "supplier_key"
          }
        ],
        "join_type": "left_outer",
        "relationship_type": "many_to_one"
      },
      {
        "name": "order_lineitems_to_part_suppliers",
        "left_table": "order_lineitems",
        "right_table": "part_suppliers",
        "relationship_columns": [
          {
            "left_column": "part_key",
            "right_column": "part_key"
          },
          {
            "left_column": "supplier_key",
            "right_column": "supplier_key"
          }
        ],
        "join_type": "left_outer",
        "relationship_type": "many_to_one"
      }
    ],
    "verified_queries": [
        {
            "name": "daily cumulative expenses in 2023 dec",
            "question": "daily cumulative expenses in 2023 dec",
            "verified_at": 1714752498,
            "verified_by": "renee",
            "sql": 
`SELECT DATE
  ,SUM(daily_cogs) OVER (
    ORDER BY DATE ROWS BETWEEN UNBOUNDED PRECEDING
    AND CURRENT ROW
  ) AS cumulative_cogs
FROM __daily_revenue
WHERE DATE BETWEEN '2023-12-01'
  AND '2023-12-31'
ORDER BY DATE DESC;`
        },
        {
            "name": "lowest revenue each month",
            "question": "For each month, what was the lowest daily revenue and on what date did that lowest revenue occur?",
            "verified_at": 1715187400,
            "verified_by": "renee",
            "sql": 
`WITH monthly_min_revenue
AS (
  SELECT DATE_TRUNC('MONTH', DATE) AS month
    ,MIN(daily_revenue) AS min_revenue
  FROM __daily_revenue
  GROUP BY DATE_TRUNC('MONTH', DATE)
)
SELECT mmr.month
  ,mmr.min_revenue
  ,dr.DATE AS min_revenue_date
FROM monthly_min_revenue AS mmr
INNER JOIN __daily_revenue AS dr ON mmr.month = DATE_TRUNC('MONTH', dr.DATE)
  AND mmr.min_revenue = dr.daily_revenue
ORDER BY mmr.month DESC NULLS LAST`
        },
        {
            "name": "daily cumulative expenses in 2023 dec 2",
            "question": "daily cumulative expenses in 2023 dec",
            "verified_at": 1714752499,
            "verified_by": "renee",
            "sql": 
`SELECT DATE
  ,SUM(daily_cogs) OVER (
    ORDER BY DATE ROWS BETWEEN UNBOUNDED PRECEDING
    AND CURRENT ROW
  ) AS cumulative_cogs
FROM __daily_revenue
WHERE DATE BETWEEN '2023-12-01'
  AND '2023-12-31'
ORDER BY DATE DESC;`
        },
        {
            "name": "lowest revenue each month 2",
            "question": "For each month, what was the lowest daily revenue and on what date did that lowest revenue occur?",
            "verified_at": 1715187401,
            "verified_by": "renee",
            "sql": 
`WITH monthly_min_revenue
AS (
  SELECT DATE_TRUNC('MONTH', DATE) AS month
    ,MIN(daily_revenue) AS min_revenue
  FROM __daily_revenue
  GROUP BY DATE_TRUNC('MONTH', DATE)
)
SELECT mmr.month
  ,mmr.min_revenue
  ,dr.DATE AS min_revenue_date
FROM monthly_min_revenue AS mmr
INNER JOIN __daily_revenue AS dr ON mmr.month = DATE_TRUNC('MONTH', dr.DATE)
  AND mmr.min_revenue = dr.daily_revenue
ORDER BY mmr.month DESC NULLS LAST`
        }
    ],
    "sample_questions": [
        ""
    ]
}]