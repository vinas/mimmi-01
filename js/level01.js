function Level() {

    this.current = 1;
    this.bkgdImage1 = 'bkg-mointains01.png';
    this.bkgdImage2 = 'bkg-mointains02.png';
    this.loadMapArr = loadMapArr;
    this.loadLevelTriggers = loadLevelTriggers;

    return this;

    function loadMapArr() {
        return [
            // #1
            [
                ['water-01.gif', 'double', 0, 'liquid'],
                ['water-01.gif', 'double', 0, 'liquid'],
                ['water-01.gif', 'double', 0, 'liquid'],
                ['water-01.gif', 'double', 0, 'liquid'],
                ['water-01.gif', 'double', 0, 'liquid'],
                ['water-01.gif', 'double', 0, 'liquid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #2
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole']
            ],
            // #3
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['floor02.png', 'single', 0, 'solid'],
                ['floor02.png', 'single', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #4
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #5
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #6
            [
                ['floor02.png', 'single', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor02.png', 'single', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor02.png', 'single', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
            ],
            // #7
            [
                ['floor02.png', 'single', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor02.png', 'single', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor02.png', 'single', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor02.png', 'single', 0, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor02.png', 'single', 0, 'solid']
            ],
            // #8
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'single', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'single', 0, 'hole'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #9
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #10
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['water-01.gif', 'double', 0, 'liquid'],
                ['water-01.gif', 'double', 0, 'liquid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #11
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'single', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'single', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'single', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'single', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #12
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['floor02.png', 'single', 0, 'solid']
            ],
            // #13
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'single', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #14
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['plataform02.png', 'single', 2, 'solid'],
                ['plataform01.png', 'single', 1, 'solid'],
                ['floor01.png', 'double', 0, 'solid']
            ],
            // #15
            [
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['floor01.png', 'double', 0, 'solid'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole'],
                ['hole01.png', 'double', 0, 'hole']
            ]
        ];
    }

    function loadLevelTriggers() {
        levelTriggers = [
            // #1
            {
                25: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoIn
                    ],
                    params: [
                        {
                            left: 70,
                            top: 20
                        }
                    ]
                },
                70: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoOut
                    ],
                    params: [
                        {}
                    ]
                }
            },
            // #2
            {
                5: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.standingPig
                    ],
                    params: [
                        {
                            left: 73,
                            top: 56
                        }
                    ]
                },
                50: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoIn
                    ],
                    params: [
                        {
                            left: 25,
                            top: 10
                        }
                    ]
                },
                90: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoOut
                    ],
                    params: [
                        {}
                    ]
                }
            },
            // #3
            {
                5: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.jumpingPig
                    ],
                    params: [
                        {
                            left: 27,
                            top: 56,
                            forceTop: 48
                        }
                    ]
                },
                55: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoIn
                    ],
                    params: [
                        {
                            left: 34,
                            top: 34
                        }
                    ]
                },
                85: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoOut
                    ],
                    params: [
                        {}
                    ]
                }
            },
            // #4
            {
                2: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.jumpingPig
                    ],
                    params: [
                        {
                            left: 15,
                            top: 56,
                            forceTop: 30
                        }
                    ]
                },
                50: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 80,
                            top: 46
                        }
                    ]
                }
            },
            // #5
            {
                2: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.standingPig
                    ],
                    params: [
                        {
                            left: 52,
                            top: 44
                        }
                    ]
                },
                6: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.abductPig
                    ],
                    params: [{}]
                },
                75: {
                    onlyOnce: false,
                    triggered: false,
                    actions: [
                        display.ufoIn,
                        
                    ],
                    params: [
                        {
                            left: 25,
                            top: 10
                        }
                    ]
                },
                90: {
                    onlyOnce: false,
                    triggered: false,
                    actions: [
                        display.ufoOut
                    ],
                    params: [
                        {}
                    ]
                }
            },
            // #6
            {
                2: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 72,
                            top: 30
                        }
                    ]
                },
                55: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 72,
                            top: 35
                        }
                    ]
                }
            },
            // #7
            {
                2: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.jumpingPig
                    ],
                    params: [
                        {
                            left: 37,
                            top: 44,
                            forceTop: 47
                        }
                    ]
                },
                3: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 72,
                            top: 30
                        }
                    ]
                },
                55: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 72,
                            top: 35
                        }
                    ]
                }
            },
            // #8
            {
                10: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 72,
                            top: 46
                        }
                    ]
                }
            },
            // #9
            {
                10: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 72,
                            top: 36
                        }
                    ]
                },
                48: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 80,
                            top: 46
                        }
                    ]
                },
            },
            // #10
            {
                2: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.standingPig
                    ],
                    params: [
                        {
                            left: 75,
                            top: 50
                        }
                    ]
                },
                3: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.abductPig
                    ],
                    params: [
                        {}
                    ]
                }
            },
            // #11
            {
                10: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 72,
                            top: 30
                        }
                    ]
                },
                45: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 80,
                            top: 46
                        }
                    ]
                }
            },
            // #12
            {},
            // #13
            {
                63: {
                    onlyOnce: false,
                    triggered: false,
                    actions: [
                        display.ufoIn
                    ],
                    params: [
                        {
                            left: 80,
                            top: 23
                        }
                    ]
                },
                80: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoOut
                    ],
                    params: [
                        {}
                    ]
                }
            },
            // #14
            {
                2: {
                    onlyOnce: false,
                    triggered: false,
                    actions: [
                        display.jumpingPig
                    ],
                    params: [
                        {
                            left: 92,
                            top: 56,
                            forceTop: 40
                        }
                    ]
                },
                15: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoIn
                    ],
                    params: [
                        {
                            left: 75,
                            top: 20
                        }
                    ]
                },
                30: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoOut
                    ],
                    params: [
                        {}
                    ]
                },
                50: {
                    onlyOnce: true,
                    triggered: false,
                    actions: [
                        display.ufoAttack01
                    ],
                    params: [
                        {
                            left: 75,
                            top: 20
                        }
                    ]
                }
            },
            // #15
            {
                65: {
                    onlyOnce: false,
                    triggered: false,
                    actions: [
                        game.endGame
                    ],
                    params: [
                        'abducted'
                    ]
                }
            }
        ];
    }

}