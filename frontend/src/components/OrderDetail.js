import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import BreadcrumbsConsta from './BreadcrumbsConsta';
import { getBreadcrumbs } from './BreadcrumbUtils';
import '../Order.css'; // Импорт CSS-файла
import { Table } from '@consta/uikit/Table';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';

const OrderDetail = () => {
    const { id } = useParams();
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get(`orders/${id}/`)
            .then(response => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the order details!", error);
                setError('Failed to load order details');
                setLoading(false);
            });
    }, [id]);

    if (!orders) {
        return <div>Загрузка...</div>;
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const breadcrumbs = getBreadcrumbs('orders', orders?.title);


    const columnsroadNns = [
        {
          title: 'Диаметр долота, мм.',
          accessor: 'diameter',
        },
        {
          title: 'Единицы измерения',
          accessor: 'unit',
        },
        {
          title: 'Норматив на скважину, м',
          accessor: 'standard',
        },
        {
          title: 'Стоимость за ед. изм., руб./м',
          accessor: 'costperunit',
        },
        
        {
          title: 'Гарантированная часть',
          columns: [
        {
            title: '2025 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2025',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2025',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2025',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2025',
                align: 'center',
              },
            ],
          },
          {
            title: '2026 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2026',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2026',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2026',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2026',
                align: 'center',
              },
            ],
          },
          {
            title: '2027 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2027',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2027',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2027',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2027',
                align: 'center',
              },
            ],
          },
        ],
      },

      ];

    const columnsroadGs = [
        {
          title: 'Диаметр долота, мм.',
          accessor: 'diameter',
        },
        {
          title: 'Единицы измерения',
          accessor: 'unit',
        },
        {
          title: 'Норматив на скважину, м',
          accessor: 'standard',
        },
        {
          title: 'Стоимость за ед. изм., руб./м',
          accessor: 'costperunit',
        },

        {
          title: 'Гарантированная часть',
          columns: [
        {
            title: '2025 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2025',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2025',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2025',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2025',
                align: 'center',
              },
            ],
          },
          {
            title: '2026 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2026',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2026',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2026',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2026',
                align: 'center',
              },
            ],
          },
          {
            title: '2027 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2027',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2027',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2027',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2027',
                align: 'center',
              },
            ],
          },
        ],
      },
      ];

    const columnsroadGsPilot = [
        {
          title: 'Диаметр долота, мм.',
          accessor: 'diameter',
        },
        {
          title: 'Единицы измерения',
          accessor: 'unit',
        },
        {
          title: 'Норматив на скважину, м',
          accessor: 'standard',
        },
        {
          title: 'Стоимость за ед. изм., руб./м',
          accessor: 'costperunit',
        },

        {
        title: 'Гарантированная часть',
        columns: [
                  {
                      title: '2025 г.',
                      columns: [
                        {
                          title: 'Кол-во скв.',
                          accessor: 'quantity_well2025',
                          align: 'center',
                        },
                        {
                          title: 'Кол-во всего метры',
                          accessor: 'quantity_m2025',
                          align: 'center',
                        },
                        {
                          title: 'Стоимость за ед.изм., руб./м',
                          accessor: 'price2025',
                          align: 'center',
                        },
                        {
                          title: 'Стоимость всего, руб.',
                          accessor: 'price_all2025',
                          align: 'center',
                        },
                      ],
                    },
                    {
                      title: '2026 г.',
                      columns: [
                        {
                          title: 'Кол-во скв.',
                          accessor: 'quantity_well2026',
                          align: 'center',
                        },
                        {
                          title: 'Кол-во всего метры',
                          accessor: 'quantity_m2026',
                          align: 'center',
                        },
                        {
                          title: 'Стоимость за ед.изм., руб./м',
                          accessor: 'price2026',
                          align: 'center',
                        },
                        {
                          title: 'Стоимость всего, руб.',
                          accessor: 'price_all2026',
                          align: 'center',
                        },
                      ],
                    },
                    {
                      title: '2027 г.',
                      columns: [
                        {
                          title: 'Кол-во скв.',
                          accessor: 'quantity_well2027',
                          align: 'center',
                        },
                        {
                          title: 'Кол-во всего метры',
                          accessor: 'quantity_m2027',
                          align: 'center',
                        },
                        {
                          title: 'Стоимость за ед.изм., руб./м',
                          accessor: 'price2027',
                          align: 'center',
                        },
                        {
                          title: 'Стоимость всего, руб.',
                          accessor: 'price_all2027',
                          align: 'center',
                        },
                      ],
                    },
        ],
      },
      ];

    const columnsautonomicNns = [
        {
          title: 'Диаметр долота, мм.',
          accessor: 'diameter',
        },
        {
          title: 'Единицы измерения',
          accessor: 'unit',
        },
        {
          title: 'Норматив на скважину, м',
          accessor: 'standard',
        },
        {
          title: 'Стоимость за ед. изм., руб./м',
          accessor: 'costperunit',
        },

        {
        title: 'Гарантированная часть',
        columns: [
        {
            title: '2025 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2025',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2025',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2025',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2025',
                align: 'center',
              },
            ],
          },
          {
            title: '2026 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2026',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2026',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2026',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2026',
                align: 'center',
              },
            ],
          },
          {
            title: '2027 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2027',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2027',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2027',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2027',
                align: 'center',
              },
            ],
          },
        ],
      },
      ];

    const columnsautonomicGs = [
        {
          title: 'Диаметр долота, мм.',
          accessor: 'diameter',
        },
        {
          title: 'Единицы измерения',
          accessor: 'unit',
        },
        {
          title: 'Норматив на скважину, м',
          accessor: 'standard',
        },
        {
          title: 'Стоимость за ед. изм., руб./м',
          accessor: 'costperunit',
        },


        {
        title: 'Гарантированная часть',
        columns: [
        {
            title: '2025 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2025',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2025',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2025',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2025',
                align: 'center',
              },
            ],
          },
          {
            title: '2026 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2026',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2026',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2026',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2026',
                align: 'center',
              },
            ],
          },
          {
            title: '2027 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2027',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2027',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2027',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2027',
                align: 'center',
              },
            ],
          },
        ],
      },
      ];

    const columnsautonomicGsPilot = [
        {
          title: 'Диаметр долота, мм.',
          accessor: 'diameter',
        },
        {
          title: 'Единицы измерения',
          accessor: 'unit',
        },
        {
          title: 'Норматив на скважину, м',
          accessor: 'standard',
        },
        {
          title: 'Стоимость за ед. изм., руб./м',
          accessor: 'costperunit',
        },

        {
        title: 'Гарантированная часть',
        columns: [
        {
            title: '2025 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2025',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2025',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2025',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2025',
                align: 'center',
              },
            ],
          },
          {
            title: '2026 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2026',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2026',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2026',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2026',
                align: 'center',
              },
            ],
          },
          {
            title: '2027 г.',
            columns: [
              {
                title: 'Кол-во скв.',
                accessor: 'quantity_well2027',
                align: 'center',
              },
              {
                title: 'Кол-во всего метры',
                accessor: 'quantity_m2027',
                align: 'center',
              },
              {
                title: 'Стоимость за ед.изм., руб./м',
                accessor: 'price2027',
                align: 'center',
              },
              {
                title: 'Стоимость всего, руб.',
                accessor: 'price_all2027',
                align: 'center',
              },
            ],
          },
        ],
      },
      ];

    const rowsroadNns = Array.isArray(orders.road_nns)
      ? orders.road_nns.flatMap(roadnns => ({
              id: `${orders.id}-${roadnns.id}`,
              diameter: roadnns.diameter,
              unit: roadnns.unit,
              standard: roadnns.standard,
              costperunit: roadnns.cost_per_unit,

              quantity_well2025: roadnns.quantity_well2025,
              quantity_m2025: roadnns.standard*roadnns.quantity_well2025,
              price2025: roadnns.price2025,
              price_all2025: (roadnns.standard*roadnns.quantity_well2025)*roadnns.price2025,

              quantity_well2026: roadnns.quantity_well2026,
              quantity_m2026: roadnns.standard*roadnns.quantity_well2026,
              price2026: roadnns.price2026,
              price_all2026: (roadnns.standard*roadnns.quantity_well2026)*roadnns.price2026,

              quantity_well2027: roadnns.quantity_well2027,
              quantity_m2027: roadnns.standard*roadnns.quantity_well2027,
              price2027: roadnns.price2027,
              price_all2027: (roadnns.standard*roadnns.quantity_well2027)*roadnns.price2027,
            }
            ))
          : [];

    // const rowsToCalculate = rowsroadNns.length > 0 ? rowsroadNns.slice(0, -1) : rowsroadNns;
    // const totalStandard = rowsToCalculate.reduce((sum, row) => sum + (row.standard || 0), 0);
    // const totalquantity_m2025 = rowsToCalculate.reduce((sum, row) => sum + (row.quantity_m2025 || 0), 0);

    const roadNns_totalStandard = rowsroadNns.reduce((sum, row) => sum + (row.standard || 0), 0);
    const roadNns_totalquantity_m2025 = rowsroadNns.reduce((sum, row) => sum + (row.quantity_m2025 || 0), 0);
    const roadNns_totalquantity_m2026 = rowsroadNns.reduce((sum, row) => sum + (row.quantity_m2026 || 0), 0);
    const roadNns_totalquantity_m2027 = rowsroadNns.reduce((sum, row) => sum + (row.quantity_m2027 || 0), 0);

    const roadNns_totalprice_all2025 = rowsroadNns.reduce((sum, row) => sum + (row.price_all2025 || 0), 0);
    const roadNns_totalprice_all2026 = rowsroadNns.reduce((sum, row) => sum + (row.price_all2026 || 0), 0);
    const roadNns_totalprice_all2027 = rowsroadNns.reduce((sum, row) => sum + (row.price_all2027 || 0), 0);

    const roadNns_totalsRow = {
              id: 'totals',
              standard: roadNns_totalStandard,
              quantity_m2025: roadNns_totalquantity_m2025,
              price_all2025: roadNns_totalprice_all2025,
              quantity_m2026: roadNns_totalquantity_m2026,
              price_all2026: roadNns_totalprice_all2026,
              quantity_m2027: roadNns_totalquantity_m2027,
              price_all2027: roadNns_totalprice_all2027,
    };

    const roadNns_rowsWithTotals = [...rowsroadNns, roadNns_totalsRow];

    const rowsroadGs = Array.isArray(orders.road_gs)
      ? orders.road_gs.flatMap(roadgs => ({
              id: `${orders.id}-${roadgs.id}`,
              diameter: roadgs.diameter,
              unit: roadgs.unit,
              standard: roadgs.standard,
              costperunit: roadgs.cost_per_unit,

              quantity_well2025: roadgs.quantity_well2025,
              quantity_m2025: roadgs.standard*roadgs.quantity_well2025,
              price2025: roadgs.price2025,
              price_all2025: (roadgs.standard*roadgs.quantity_well2025)*roadgs.price2025,

              quantity_well2026: roadgs.quantity_well2026,
              quantity_m2026: roadgs.standard*roadgs.quantity_well2026,
              price2026: roadgs.price2026,
              price_all2026: (roadgs.standard*roadgs.quantity_well2026)*roadgs.price2026,

              quantity_well2027: roadgs.quantity_well2027,
              quantity_m2027: roadgs.standard*roadgs.quantity_well2027,
              price2027: roadgs.price2027,
              price_all2027: (roadgs.standard*roadgs.quantity_well2027)*roadgs.price2027,
            }))
          : [];

          const rowsroadGs_totalStandard = rowsroadGs.reduce((sum, row) => sum + (row.standard || 0), 0);
          const rowsroadGs_totalquantity_m2025 = rowsroadGs.reduce((sum, row) => sum + (row.quantity_m2025 || 0), 0);
          const rowsroadGs_totalquantity_m2026 = rowsroadGs.reduce((sum, row) => sum + (row.quantity_m2026 || 0), 0);
          const rowsroadGs_totalquantity_m2027 = rowsroadGs.reduce((sum, row) => sum + (row.quantity_m2027 || 0), 0);
      
          const rowsroadGs_totalprice_all2025 = rowsroadGs.reduce((sum, row) => sum + (row.price_all2025 || 0), 0);
          const rowsroadGs_totalprice_all2026 = rowsroadGs.reduce((sum, row) => sum + (row.price_all2026 || 0), 0);
          const rowsroadGs_totalprice_all2027 = rowsroadGs.reduce((sum, row) => sum + (row.price_all2027 || 0), 0);
      
          const roadGs_totalsRow = {
                    id: 'totals',
                    standard: rowsroadGs_totalStandard,
                    quantity_m2025: rowsroadGs_totalquantity_m2025,
                    price_all2025: rowsroadGs_totalprice_all2025,
                    quantity_m2026: rowsroadGs_totalquantity_m2026,
                    price_all2026: rowsroadGs_totalprice_all2026,
                    quantity_m2027: rowsroadGs_totalquantity_m2027,
                    price_all2027: rowsroadGs_totalprice_all2027,
          };
      
          const rowsroadGs_rowsWithTotals = [...rowsroadGs, roadGs_totalsRow];

    const rowsroadGsPilot = Array.isArray(orders.road_gs_pilot)
      ? orders.road_gs_pilot.flatMap(roadgspilot => ({
              id: `${orders.id}-${roadgspilot.id}`,
              diameter: roadgspilot.diameter,
              unit: roadgspilot.unit,
              standard: roadgspilot.standard,
              costperunit: roadgspilot.cost_per_unit,
    
              quantity_well2025: roadgspilot.quantity_well2025,
              quantity_m2025: roadgspilot.standard*roadgspilot.quantity_well2025,
              price2025: roadgspilot.price2025,
              price_all2025: (roadgspilot.standard*roadgspilot.quantity_well2025)*roadgspilot.price2025,

              quantity_well2026: roadgspilot.quantity_well2026,
              quantity_m2026: roadgspilot.standard*roadgspilot.quantity_well2026,
              price2026: roadgspilot.price2026,
              price_all2026: (roadgspilot.standard*roadgspilot.quantity_well2026)*roadgspilot.price2026,

              quantity_well2027: roadgspilot.quantity_well2027,
              quantity_m2027: roadgspilot.standard*roadgspilot.quantity_well2027,
              price2027: roadgspilot.price2027,
              price_all2027: (roadgspilot.standard*roadgspilot.quantity_well2027)*roadgspilot.price2027,
            }))
          : [];

          const rowsroadGsPilot_totalStandard = rowsroadGsPilot.reduce((sum, row) => sum + (row.standard || 0), 0);
          const rowsroadGsPilot_totalquantity_m2025 = rowsroadGsPilot.reduce((sum, row) => sum + (row.quantity_m2025 || 0), 0);
          const rowsroadGsPilot_totalquantity_m2026 = rowsroadGsPilot.reduce((sum, row) => sum + (row.quantity_m2026 || 0), 0);
          const rowsroadGsPilot_totalquantity_m2027 = rowsroadGsPilot.reduce((sum, row) => sum + (row.quantity_m2027 || 0), 0);
      
          const rowsroadGsPilot_totalprice_all2025 = rowsroadGsPilot.reduce((sum, row) => sum + (row.price_all2025 || 0), 0);
          const rowsroadGsPilot_totalprice_all2026 = rowsroadGsPilot.reduce((sum, row) => sum + (row.price_all2026 || 0), 0);
          const rowsroadGsPilot_totalprice_all2027 = rowsroadGsPilot.reduce((sum, row) => sum + (row.price_all2027 || 0), 0);
      
          const roadGsPilot_totalsRow = {
                    id: 'totals',
                    standard: rowsroadGsPilot_totalStandard,
                    quantity_m2025: rowsroadGsPilot_totalquantity_m2025,
                    price_all2025: rowsroadGsPilot_totalprice_all2025,
                    quantity_m2026: rowsroadGsPilot_totalquantity_m2026,
                    price_all2026: rowsroadGsPilot_totalprice_all2026,
                    quantity_m2027: rowsroadGsPilot_totalquantity_m2027,
                    price_all2027: rowsroadGsPilot_totalprice_all2027,
          };
      
          const rowsroadGsPilot_rowsWithTotals = [...rowsroadGsPilot, roadGsPilot_totalsRow];

          const rowsautonomicNns = Array.isArray(orders.autonomic_nns)
          ? orders.autonomic_nns.flatMap(autonomicnns => ({
                  id: `${orders.id}-${autonomicnns.id}`,
                  diameter: autonomicnns.diameter,
                  unit: autonomicnns.unit,
                  standard: autonomicnns.standard,
                  costperunit: autonomicnns.cost_per_unit,
        
                  quantity_well2025: autonomicnns.quantity_well2025,
                  quantity_m2025: autonomicnns.standard*autonomicnns.quantity_well2025,
                  price2025: autonomicnns.price2025,
                  price_all2025: (autonomicnns.standard*autonomicnns.quantity_well2025)*autonomicnns.price2025,
    
                  quantity_well2026: autonomicnns.quantity_well2026,
                  quantity_m2026: autonomicnns.standard*autonomicnns.quantity_well2026,
                  price2026: autonomicnns.price2026,
                  price_all2026: (autonomicnns.standard*autonomicnns.quantity_well2026)*autonomicnns.price2026,
    
                  quantity_well2027: autonomicnns.quantity_well2027,
                  quantity_m2027: autonomicnns.standard*autonomicnns.quantity_well2027,
                  price2027: autonomicnns.price2027,
                  price_all2027: (autonomicnns.standard*autonomicnns.quantity_well2027)*autonomicnns.price2027,
                }))
              : [];

              const autonomicNns_totalStandard = rowsautonomicNns.reduce((sum, row) => sum + (row.standard || 0), 0);
              const autonomicNns_totalquantity_m2025 = rowsautonomicNns.reduce((sum, row) => sum + (row.quantity_m2025 || 0), 0);
              const autonomicNns_totalquantity_m2026 = rowsautonomicNns.reduce((sum, row) => sum + (row.quantity_m2026 || 0), 0);
              const autonomicNns_totalquantity_m2027 = rowsautonomicNns.reduce((sum, row) => sum + (row.quantity_m2027 || 0), 0);
          
              const autonomicNns_totalprice_all2025 = rowsautonomicNns.reduce((sum, row) => sum + (row.price_all2025 || 0), 0);
              const autonomicNns_totalprice_all2026 = rowsautonomicNns.reduce((sum, row) => sum + (row.price_all2026 || 0), 0);
              const autonomicNns_totalprice_all2027 = rowsautonomicNns.reduce((sum, row) => sum + (row.price_all2027 || 0), 0);
          
              const autonomicNns_totalsRow = {
                        id: 'totals',
                        standard: autonomicNns_totalStandard,
                        quantity_m2025: autonomicNns_totalquantity_m2025,
                        price_all2025: autonomicNns_totalprice_all2025,
                        quantity_m2026: autonomicNns_totalquantity_m2026,
                        price_all2026: autonomicNns_totalprice_all2026,
                        quantity_m2027: autonomicNns_totalquantity_m2027,
                        price_all2027: autonomicNns_totalprice_all2027,
              };
          
              const autonomicNns_rowsWithTotals = [...rowsautonomicNns, autonomicNns_totalsRow];

              const rowsautonomicGs = Array.isArray(orders.autonomic_gs)
              ? orders.autonomic_gs.flatMap(autonomicgs => ({
                      id: `${orders.id}-${autonomicgs.id}`,
                      diameter: autonomicgs.diameter,
                      unit: autonomicgs.unit,
                      standard: autonomicgs.standard,
                      costperunit: autonomicgs.cost_per_unit,
            
                      quantity_well2025: autonomicgs.quantity_well2025,
                      quantity_m2025: autonomicgs.standard*autonomicgs.quantity_well2025,
                      price2025: autonomicgs.price2025,
                      price_all2025: (autonomicgs.standard*autonomicgs.quantity_well2025)*autonomicgs.price2025,
        
                      quantity_well2026: autonomicgs.quantity_well2026,
                      quantity_m2026: autonomicgs.standard*autonomicgs.quantity_well2026,
                      price2026: autonomicgs.price2026,
                      price_all2026: (autonomicgs.standard*autonomicgs.quantity_well2026)*autonomicgs.price2026,
        
                      quantity_well2027: autonomicgs.quantity_well2027,
                      quantity_m2027: autonomicgs.standard*autonomicgs.quantity_well2027,
                      price2027: autonomicgs.price2027,
                      price_all2027: (autonomicgs.standard*autonomicgs.quantity_well2027)*autonomicgs.price2027,
                    }))
                  : [];

                  const rowsautonomicGs_totalStandard = rowsautonomicGs.reduce((sum, row) => sum + (row.standard || 0), 0);
                  const rowsautonomicGs_totalquantity_m2025 = rowsautonomicGs.reduce((sum, row) => sum + (row.quantity_m2025 || 0), 0);
                  const rowsautonomicGs_totalquantity_m2026 = rowsautonomicGs.reduce((sum, row) => sum + (row.quantity_m2026 || 0), 0);
                  const rowsautonomicGs_totalquantity_m2027 = rowsautonomicGs.reduce((sum, row) => sum + (row.quantity_m2027 || 0), 0);
              
                  const rowsautonomicGs_totalprice_all2025 = rowsautonomicGs.reduce((sum, row) => sum + (row.price_all2025 || 0), 0);
                  const rowsautonomicGs_totalprice_all2026 = rowsautonomicGs.reduce((sum, row) => sum + (row.price_all2026 || 0), 0);
                  const rowsautonomicGs_totalprice_all2027 = rowsautonomicGs.reduce((sum, row) => sum + (row.price_all2027 || 0), 0);
              
                  const autonomicGs_totalsRow = {
                            id: 'totals',
                            standard: rowsautonomicGs_totalStandard,
                            quantity_m2025: rowsautonomicGs_totalquantity_m2025,
                            price_all2025: rowsautonomicGs_totalprice_all2025,
                            quantity_m2026: rowsautonomicGs_totalquantity_m2026,
                            price_all2026: rowsautonomicGs_totalprice_all2026,
                            quantity_m2027: rowsautonomicGs_totalquantity_m2027,
                            price_all2027: rowsautonomicGs_totalprice_all2027,
                  };
              
                  const rowsautonomicGs_rowsWithTotals = [...rowsautonomicGs, autonomicGs_totalsRow];

                  const rowsautonomicGsPilot = Array.isArray(orders.autonomic_gs_pilot)
                  ? orders.autonomic_gs_pilot.flatMap(autonomicgspilot => ({
                          id: `${orders.id}-${autonomicgspilot.id}`,
                          diameter: autonomicgspilot.diameter,
                          unit: autonomicgspilot.unit,
                          standard: autonomicgspilot.standard,
                          costperunit: autonomicgspilot.cost_per_unit,
                
                          quantity_well2025: autonomicgspilot.quantity_well2025,
                          quantity_m2025: autonomicgspilot.standard*autonomicgspilot.quantity_well2025,
                          price2025: autonomicgspilot.price2025,
                          price_all2025: (autonomicgspilot.standard*autonomicgspilot.quantity_well2025)*autonomicgspilot.price2025,
            
                          quantity_well2026: autonomicgspilot.quantity_well2026,
                          quantity_m2026: autonomicgspilot.standard*autonomicgspilot.quantity_well2026,
                          price2026: autonomicgspilot.price2026,
                          price_all2026: (autonomicgspilot.standard*autonomicgspilot.quantity_well2026)*autonomicgspilot.price2026,
            
                          quantity_well2027: autonomicgspilot.quantity_well2027,
                          quantity_m2027: autonomicgspilot.standard*autonomicgspilot.quantity_well2027,
                          price2027: autonomicgspilot.price2027,
                          price_all2027: (autonomicgspilot.standard*autonomicgspilot.quantity_well2027)*autonomicgspilot.price2027,
                        }))
                      : [];

                      const rowsautonomicGsPilot_totalStandard = rowsautonomicGsPilot.reduce((sum, row) => sum + (row.standard || 0), 0);
                      const rowsautonomicGsPilot_totalquantity_m2025 = rowsautonomicGsPilot.reduce((sum, row) => sum + (row.quantity_m2025 || 0), 0);
                      const rowsautonomicGsPilot_totalquantity_m2026 = rowsautonomicGsPilot.reduce((sum, row) => sum + (row.quantity_m2026 || 0), 0);
                      const rowsautonomicGsPilot_totalquantity_m2027 = rowsautonomicGsPilot.reduce((sum, row) => sum + (row.quantity_m2027 || 0), 0);
                  
                      const rowsautonomicGsPilot_totalprice_all2025 = rowsautonomicGsPilot.reduce((sum, row) => sum + (row.price_all2025 || 0), 0);
                      const rowsautonomicGsPilot_totalprice_all2026 = rowsautonomicGsPilot.reduce((sum, row) => sum + (row.price_all2026 || 0), 0);
                      const rowsautonomicGsPilot_totalprice_all2027 = rowsautonomicGsPilot.reduce((sum, row) => sum + (row.price_all2027 || 0), 0);
                  
                      const autonomicGsPilot_totalsRow = {
                                id: 'totals',
                                standard: rowsautonomicGsPilot_totalStandard,
                                quantity_m2025: rowsautonomicGsPilot_totalquantity_m2025,
                                price_all2025: rowsautonomicGsPilot_totalprice_all2025,
                                quantity_m2026: rowsautonomicGsPilot_totalquantity_m2026,
                                price_all2026: rowsautonomicGsPilot_totalprice_all2026,
                                quantity_m2027: rowsautonomicGsPilot_totalquantity_m2027,
                                price_all2027: rowsautonomicGsPilot_totalprice_all2027,
                      };
                  
                      const rowsautonomicGsPilot_rowsWithTotals = [...rowsautonomicGsPilot, autonomicGsPilot_totalsRow];


    return (
        <div className="orderOptions">
            <Helmet>
                <title>Уберизация ДС - Наряд-заказ</title>
            </Helmet>
            <BreadcrumbsConsta breadcrumbs={breadcrumbs} />
            
            <h2>{orders.title}</h2>
            <Card verticalSpace="xl" horizontalSpace="xl">
            <p><b>Наименование процедуры выбора:</b> {orders.name_choise}</p>
            <p><b>Объект выполнения работ / оказания услуг:</b> {orders.job_object}</p>
            <p><b>Реестровый номер процедуры (РНП):</b> {orders.rnp_number}</p>
            <p><b>СРОКИ НАЧАЛА БУРЕНИЯ 1-Й СКВАЖИНЫ:</b> {orders.start_drilling_date}</p>
            <p><b>СРОКИ МОБИЛИЗАЦИИ:</b> {orders.mobilization_period}</p>
            <p><b>ПЕРИОД ОКАЗАНИЯ УСЛУГ:</b> {orders.service_period}</p>
            <p><b>Ориентировочное max кол-во постов:</b> {orders.max_posts}</p>
            {/* Добавьте другие поля заказа, которые хотите отобразить */}
            </Card>
            <div>

            <Text view="normal" className="orderTextTitle" weight="bold">Месторождения с круглогодичным дорожным сообщением</Text>
            <Card verticalSpace="xl" horizontalSpace="xl" className="cardTable">
            <Text view="success" weight="bold">ННС</Text>
            <div className='table'>
              <Table columns={columnsroadNns} rows={roadNns_rowsWithTotals} borderBetweenRows borderBetweenColumns stickyColumns='4' />
            </div>
            </Card>
            <Card verticalSpace="xl" horizontalSpace="xl" className="cardTable">
            <Text view="success" weight="bold">ГС</Text>
            <div className='table'>
              <Table columns={columnsroadGs} rows={rowsroadGs_rowsWithTotals} borderBetweenRows borderBetweenColumns stickyColumns='4' />
            </div>
            </Card>
            <Card verticalSpace="xl" horizontalSpace="xl" className="cardTable">
            <Text view="success" weight="bold">ГС + Пилот</Text>
            <div className='table'>
              <Table columns={columnsroadGsPilot} rows={rowsroadGsPilot_rowsWithTotals} borderBetweenRows borderBetweenColumns stickyColumns='4' />
            </div>
            </Card>

            <Text view="normal" className="orderTextTitle" weight="bold">Автономные м/р</Text>
            <Card verticalSpace="xl" horizontalSpace="xl" className="cardTable">
            <Text view="success" weight="bold">ННС</Text>
            <div className='table'>
              <Table columns={columnsautonomicNns} rows={autonomicNns_rowsWithTotals} borderBetweenRows borderBetweenColumns stickyColumns='4' />
            </div>
            </Card>
            <Card verticalSpace="xl" horizontalSpace="xl" className="cardTable">
            <Text view="success" weight="bold">ГС</Text>
            <div className='table'>
              <Table columns={columnsautonomicGs} rows={rowsautonomicGs_rowsWithTotals} borderBetweenRows borderBetweenColumns stickyColumns='4' />
            </div>
            </Card>
            <Card verticalSpace="xl" horizontalSpace="xl" className="cardTable">
            <Text view="success" weight="bold">ГС + Пилот</Text>
            <div className='table'>
              <Table columns={columnsautonomicGsPilot} rows={rowsautonomicGsPilot_rowsWithTotals} borderBetweenRows borderBetweenColumns stickyColumns='4' />
            </div>
            </Card>

            <div dangerouslySetInnerHTML={{ __html: orders.order_сonditions }} className="textBlock" /></div>

            <Button label="Отправить коммерческое предложение" />

        </div>

    );
};

export default OrderDetail;