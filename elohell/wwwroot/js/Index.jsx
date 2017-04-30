var WinLossByMap = React.createClass({
    makeChart: function () {
        var chart = c3.generate({
            bindto: '#WinLossMapGraph',
            data: {
                columns: [
                    ['Wins', 30, 200, 100, 400, 150, 250, 670, 56, 69, 10, 13, 15, 17, 19],
                    ['Losses', 50, 20, 10, 40, 15, 25, 28, 79, 20, 13, 16, 18, 11, 14]
                ],
                types: {
                    Wins: 'bar',
                    Losses: 'bar',
                },
                groups: [
                    ['Wins', 'Losses']
                ],
            },
            axis: {
                rotated: true,
                x: {
                    type: 'category',
                    categories: ['Hanamura', 'Temple of Anubis', 'Volskaya Industries', 'Dorado', 'Route 66', 'Watchpoint: Gibraltar',
                        'Hollywood', 'King\'s Row', 'Numbani', 'Eichenwalde', 'Ilios', 'Lijiang Tower', 'Nepal', 'Oasis'],
                    tick: {
                        rotate: 90,
                        multiline: true
                    }
                }
            }
        });
    },

    componentDidMount: function () {
        this.makeChart();
    },

    render: function () {
        return (
            <div id="WinLossMapGraph"></div>
        )
    }
})

var WinLossByDayGraph = React.createClass({
    makeChart: function () {
        var chart = c3.generate({
            bindto: '#WinLossDayGraph',
            data: {
                columns: [
                    ['Wins', 50, 20, 10, 40, 15, 25, 69],
                    ['Losses', 50, 20, 10, 40, 15, 25, 69],
                ],
                types: {
                    Wins: 'bar',
                    Losses: 'bar',
                },
                groups: [
                    ['Wins', 'Losses']
                ],
            },
            bar: {
                width: {
                    ratio: 0.5
                }
            },
            axis: {
                rotated: true,
                x: {
                    type: 'category',
                    categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    tick: {
                        rotate: 90,
                        multiline: false
                    }
                }
            }
        });
    },

    componentDidMount: function () {
        this.makeChart();
    },

    render: function () {
        return (
            <div id="WinLossDayGraph"></div>
        )
    }
});

var SkillRatingOverTimeGraph = React.createClass({
    makeChart: function () {
        var chart = c3.generate({
            bindto: '#SkillRatingTimeGraph',
            data: {
                columns: [
                    ['Skill Rating', 1, 1500, 2000, 2500, 3000, 3500, 4000]
                ]
            },
            axis: {
                x: {
                    label: 'Time'
                },
                y: {
                    label: 'Skill Rating'
                }
            },
            grid: {
                y: {
                    lines: [
                        { value: 1, text: 'Bronze' },
                        { value: 1500, text: 'Silver' },
                        { value: 2000, text: 'Gold' },
                        { value: 2500, text: 'Platinum' },
                        { value: 3000, text: 'Diamond' },
                        { value: 3500, text: 'Master' },
                        { value: 4000, text: 'Grandmaster' }
                    ]
                }
            },
            zoom: {
                enabled: true
            }
        });
    },

    componentDidMount: function () {
        this.makeChart();
    },

    render: function () {
        return (
            <div id="SkillRatingTimeGraph"></div>
        )
    }
});

var Graphs = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <SkillRatingOverTimeGraph />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <WinLossByDayGraph />
                    </div>

                    <div className="col-lg-6">
                        <WinLossByMap />
                    </div>
                </div>
            </div>
        )
    }

});

var AddButtonRow = React.createClass({
    showModal: function () {
        this.setState({ view {showModal: true }})
    },
    render: function () {
        return (
            <div className="row text-center">
                <button type="button" className="btn btn-lg btn-success" aria-label="Left Align" onClick={this.showModal}>
                    <span className="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
            </div>
        )
    }
})

var SkillRatingRow = React.createClass({
    render: function () {
        return (
            <div className="row">
                <h1 className="text-center">SR: 3468</h1>
            </div>
        )
    }
});

var Container = React.createClass({
    render: function () {
        return (
            <div className="container-fluid">
                <SkillRatingRow />
                <AddButtonRow />
                <Graphs />
            </div>
        )
    }
});

var NavBar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Elo Hell!</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="email" />
                                <input type="password" className="form-control" placeholder="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
});

let Modal = React.createClass({
    componentDidMount:function () {
        $(this.getDOMNode()).modal('show');
        $(this.getDOMNode()).on('hidden.bs.modal', this.props.handleHideModal);
    },
    render: function () {
        return (
            <div className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            <p>One fine body&hellip;</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    propTypes: {
        handleHideModal: React.PropTypes.func.isRequired
    }
});

ReactDOM.render(
    <div>
        <NavBar />
        <Container />
    </div>,
    document.getElementById('content')
);