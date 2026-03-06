(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1165], {
        81894: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 77626))
        },
        77626: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return i
                }
            });
            var r = t(57437),
                n = t(91232),
                a = t(61396),
                o = t.n(a);
            let c = [{
                    title: "Immutable Smart Contract",
                    description: "The contract has no owner, admin keys, or upgrade mechanisms. Once deployed, the code cannot be changed.",
                    icon: (0, r.jsx)("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: (0, r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        })
                    }),
                    color: "purple"
                }, {
                    title: "Open Source Code",
                    description: "All smart contract code is verified and publicly available on BSCScan for anyone to audit.",
                    icon: (0, r.jsx)("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: (0, r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        })
                    }),
                    color: "cyan"
                }, {
                    title: "No Pause Function",
                    description: "There is no mechanism to pause the contract. It runs autonomously forever.",
                    icon: (0, r.jsxs)("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: [(0, r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        }), (0, r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })]
                    }),
                    color: "success"
                }, {
                    title: "Transparent Mechanics",
                    description: "All rates and calculations are hardcoded and visible in the contract.",
                    icon: (0, r.jsxs)("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: [(0, r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }), (0, r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        })]
                    }),
                    color: "teal"
                }],
                l = [{
                    label: "Contract Owner",
                    value: "0x000...000",
                    description: "No owner — returns address(0)"
                }, {
                    label: "Daily ROI",
                    value: "1.5%",
                    description: "Fixed daily return rate"
                }, {
                    label: "Annual APR",
                    value: "547.5%",
                    description: "Annual percentage rate"
                }, {
                    label: "Lock Period",
                    value: "None",
                    description: "No lock — withdraw anytime"
                }, {
                    label: "Withdrawal Limit",
                    value: "None",
                    description: "No daily or global limits"
                }, {
                    label: "Referral Type",
                    value: "Direct",
                    description: "Single-level direct referral only"
                }, {
                    label: "Max Commission",
                    value: "15%",
                    description: "Diamond tier on direct referrals"
                }];

            function i() {
                let e = {
                    purple: "bg-[rgba(123,97,255,0.1)] text-accent-purple",
                    cyan: "bg-[rgba(0,212,255,0.1)] text-accent-cyan",
                    success: "bg-success-bg text-success",
                    teal: "bg-[rgba(46,186,198,0.1)] text-accent-teal"
                };
                return (0, r.jsxs)("main", {
                    className: "min-h-screen bg-bg-secondary",
                    children: [(0, r.jsx)("div", {
                        className: "animated-bg"
                    }), (0, r.jsx)("div", {
                        className: "grid-bg fixed inset-0 pointer-events-none"
                    }), (0, r.jsxs)("div", {
                        className: "relative z-10",
                        children: [(0, r.jsx)(n.Z, {}), (0, r.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16",
                            children: [(0, r.jsxs)("div", {
                                className: "mb-12",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-2 text-sm text-text-muted mb-4",
                                    children: [(0, r.jsx)(o(), {
                                        href: "/",
                                        className: "hover:text-accent-purple transition-colors",
                                        children: "Home"
                                    }), (0, r.jsx)("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9 5l7 7-7 7"
                                        })
                                    }), (0, r.jsx)("span", {
                                        className: "text-text-primary",
                                        children: "Trust & Security"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "max-w-3xl",
                                    children: [(0, r.jsx)("h1", {
                                        className: "text-4xl sm:text-5xl font-bold text-text-primary mb-4",
                                        children: "Trust & Security"
                                    }), (0, r.jsx)("p", {
                                        className: "text-xl text-text-secondary",
                                        children: "Understanding how our protocol keeps your funds safe through transparency and immutability."
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-wrap items-center gap-3 mb-12",
                                children: [(0, r.jsxs)("div", {
                                    className: "trust-badge",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4 text-success",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M5 13l4 4L19 7"
                                        })
                                    }), "Verified on BSCScan"]
                                }), (0, r.jsxs)("div", {
                                    className: "trust-badge",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4 text-success",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M5 13l4 4L19 7"
                                        })
                                    }), "Ownership Renounced"]
                                }), (0, r.jsxs)("div", {
                                    className: "trust-badge",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4 text-success",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M5 13l4 4L19 7"
                                        })
                                    }), "Open Source"]
                                }), (0, r.jsxs)("div", {
                                    className: "trust-badge",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4 text-success",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M5 13l4 4L19 7"
                                        })
                                    }), "No Admin Functions"]
                                }), (0, r.jsxs)("a", {
                                    href: "https://de.fi/scanner/contract/0x597ecc15e2120ea8e351a9d4ed62ca022cd28061?chainId=bnb",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "trust-badge hover:bg-success-bg transition-colors",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4 text-success",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        })
                                    }), "De.fi Scanner"]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "grid sm:grid-cols-2 gap-6 mb-12",
                                children: c.map(s => (0, r.jsxs)("div", {
                                    className: "glass-card p-6 sm:p-8 hover-float",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ".concat(e[s.color]),
                                        children: s.icon
                                    }), (0, r.jsx)("h3", {
                                        className: "text-xl font-semibold text-text-primary mb-3",
                                        children: s.title
                                    }), (0, r.jsx)("p", {
                                        className: "text-text-secondary",
                                        children: s.description
                                    })]
                                }, s.title))
                            }), (0, r.jsxs)("div", {
                                className: "glass-card-highlight p-6 sm:p-8 mb-12",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-4 mb-8",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center",
                                        children: (0, r.jsx)("svg", {
                                            className: "w-6 h-6 text-white",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                            })
                                        })
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("h2", {
                                            className: "text-2xl font-bold text-text-primary",
                                            children: "Contract Parameters"
                                        }), (0, r.jsx)("p", {
                                            className: "text-text-muted",
                                            children: "All values are hardcoded and immutable"
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                                    children: l.map(e => (0, r.jsxs)("div", {
                                        className: "bg-bg-secondary rounded-2xl p-5",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-2xl sm:text-3xl font-bold gradient-text mb-1",
                                            children: e.value
                                        }), (0, r.jsx)("p", {
                                            className: "font-semibold text-text-primary text-sm",
                                            children: e.label
                                        }), (0, r.jsx)("p", {
                                            className: "text-xs text-text-muted mt-1",
                                            children: e.description
                                        })]
                                    }, e.label))
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "glass-card p-6 sm:p-8 mb-12",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-4 mb-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-12 h-12 bg-gradient-subtle rounded-xl flex items-center justify-center",
                                        children: (0, r.jsx)("svg", {
                                            className: "w-6 h-6 text-accent-purple",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            })
                                        })
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("h2", {
                                            className: "text-2xl font-bold text-text-primary",
                                            children: "Verify Yourself"
                                        }), (0, r.jsx)("p", {
                                            className: "text-text-muted",
                                            children: "Don't trust, verify"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: [(0, r.jsxs)("a", {
                                        href: "https://bscscan.com/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061#code",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-4 p-4 bg-bg-secondary rounded-xl hover:bg-bg-tertiary transition-colors group",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-10 h-10 bg-[rgba(123,97,255,0.1)] rounded-lg flex items-center justify-center",
                                            children: (0, r.jsx)("svg", {
                                                className: "w-5 h-5 text-accent-purple",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-semibold text-text-primary group-hover:text-accent-purple transition-colors",
                                                children: "BSCScan"
                                            }), (0, r.jsx)("p", {
                                                className: "text-sm text-text-muted",
                                                children: "Verified contract source code"
                                            })]
                                        }), (0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-text-muted group-hover:text-accent-purple transition-colors",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            })
                                        })]
                                    }), (0, r.jsxs)("a", {
                                        href: "https://de.fi/scanner/contract/0x597ecc15e2120ea8e351a9d4ed62ca022cd28061?chainId=bnb",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-4 p-4 bg-success-bg rounded-xl hover:bg-success/10 transition-colors group border border-success/20",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center",
                                            children: (0, r.jsx)("svg", {
                                                className: "w-5 h-5 text-success",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-semibold text-success transition-colors",
                                                children: "De.fi Scanner Audit ✓"
                                            }), (0, r.jsx)("p", {
                                                className: "text-sm text-text-muted",
                                                children: "Independent smart contract audit"
                                            })]
                                        }), (0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-success",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            })
                                        })]
                                    }), (0, r.jsxs)("a", {
                                        href: "https://solidityscan.com/quickscan/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061/bscscan/mainnet",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-4 p-4 bg-bg-secondary rounded-xl hover:bg-bg-tertiary transition-colors group",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-10 h-10 bg-success-bg rounded-lg flex items-center justify-center",
                                            children: (0, r.jsx)("svg", {
                                                className: "w-5 h-5 text-success",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-semibold text-text-primary group-hover:text-success transition-colors",
                                                children: "SolidityScan"
                                            }), (0, r.jsx)("p", {
                                                className: "text-sm text-text-muted",
                                                children: "Security vulnerability scan"
                                            })]
                                        }), (0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-text-muted group-hover:text-success transition-colors",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            })
                                        })]
                                    }), (0, r.jsxs)("a", {
                                        href: "https://bsctrace.com/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-4 p-4 bg-bg-secondary rounded-xl hover:bg-bg-tertiary transition-colors group",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-10 h-10 bg-[rgba(0,212,255,0.1)] rounded-lg flex items-center justify-center",
                                            children: (0, r.jsx)("svg", {
                                                className: "w-5 h-5 text-accent-cyan",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-semibold text-text-primary group-hover:text-accent-cyan transition-colors",
                                                children: "BSCTrace"
                                            }), (0, r.jsx)("p", {
                                                className: "text-sm text-text-muted",
                                                children: "Transaction tracing & analytics"
                                            })]
                                        }), (0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-text-muted group-hover:text-accent-cyan transition-colors",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            })
                                        })]
                                    }), (0, r.jsxs)("a", {
                                        href: "https://intel.arkm.com/explorer/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-4 p-4 bg-bg-secondary rounded-xl hover:bg-bg-tertiary transition-colors group",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-10 h-10 bg-[rgba(123,97,255,0.1)] rounded-lg flex items-center justify-center",
                                            children: (0, r.jsxs)("svg", {
                                                className: "w-5 h-5 text-accent-purple",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: [(0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                }), (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                })]
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-semibold text-text-primary group-hover:text-accent-purple transition-colors",
                                                children: "Arkham Intel"
                                            }), (0, r.jsx)("p", {
                                                className: "text-sm text-text-muted",
                                                children: "Blockchain intelligence & flow tracking"
                                            })]
                                        }), (0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-text-muted group-hover:text-accent-purple transition-colors",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            })
                                        })]
                                    }), (0, r.jsxs)("a", {
                                        href: "https://bscscan.com/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061#readContract",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-4 p-4 bg-bg-secondary rounded-xl hover:bg-bg-tertiary transition-colors group",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-10 h-10 bg-[rgba(46,186,198,0.1)] rounded-lg flex items-center justify-center",
                                            children: (0, r.jsx)("svg", {
                                                className: "w-5 h-5 text-accent-teal",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-semibold text-text-primary group-hover:text-accent-teal transition-colors",
                                                children: "Read Contract"
                                            }), (0, r.jsx)("p", {
                                                className: "text-sm text-text-muted",
                                                children: "Query on-chain state directly"
                                            })]
                                        }), (0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-text-muted group-hover:text-accent-teal transition-colors",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "glass-card p-6 sm:p-8 mb-12 border-2 border-success/30",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-4 mb-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-12 h-12 bg-success-bg rounded-xl flex items-center justify-center flex-shrink-0",
                                        children: (0, r.jsx)("svg", {
                                            className: "w-6 h-6 text-success",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            })
                                        })
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("h2", {
                                            className: "text-2xl font-bold text-text-primary",
                                            children: "Ownership Renounced"
                                        }), (0, r.jsxs)("p", {
                                            className: "text-text-muted",
                                            children: ["Contract owner = ", (0, r.jsx)("code", {
                                                className: "text-success font-mono",
                                                children: "0x0000...0000"
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [(0, r.jsxs)("div", {
                                        className: "p-4 bg-bg-secondary rounded-xl",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-sm font-semibold text-text-primary mb-2",
                                            children: "Contract Owner Address"
                                        }), (0, r.jsx)("code", {
                                            className: "text-xs sm:text-sm font-mono text-success break-all block p-3 bg-bg-primary rounded-lg",
                                            children: "0x0000000000000000000000000000000000000000"
                                        }), (0, r.jsx)("p", {
                                            className: "text-xs text-text-muted mt-2",
                                            children: "Verified on BSCScan — ownership was transferred to the zero address after deployment. This means no one can ever modify, pause, or upgrade this contract."
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "grid sm:grid-cols-3 gap-3",
                                        children: [(0, r.jsxs)("div", {
                                            className: "p-3 bg-bg-secondary rounded-xl text-center",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-success font-bold text-lg",
                                                children: "0"
                                            }), (0, r.jsx)("p", {
                                                className: "text-xs text-text-muted",
                                                children: "Admin Functions"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "p-3 bg-bg-secondary rounded-xl text-center",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-success font-bold text-lg",
                                                children: "0"
                                            }), (0, r.jsx)("p", {
                                                className: "text-xs text-text-muted",
                                                children: "onlyOwner Calls"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "p-3 bg-bg-secondary rounded-xl text-center",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-success font-bold text-lg",
                                                children: "0"
                                            }), (0, r.jsx)("p", {
                                                className: "text-xs text-text-muted",
                                                children: "Upgrade Paths"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "glass-card-highlight p-6 sm:p-8 mb-12",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-4 mb-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0",
                                        children: (0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDD11"
                                        })
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("h2", {
                                            className: "text-2xl font-bold text-text-primary",
                                            children: "Safe"
                                        }), (0, r.jsx)("p", {
                                            className: "text-text-muted",
                                            children: "Ultimate proof of immutability"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [(0, r.jsxs)("p", {
                                        className: "text-text-secondary",
                                        children: ["Renounced to ", (0, r.jsx)("code", {
                                            className: "text-accent-purple font-mono text-sm",
                                            children: "0x0"
                                        }), " ", (0, r.jsx)("strong", {
                                            children: "zero"
                                        }), " "]
                                    }), (0, r.jsxs)("div", {
                                        className: "p-4 bg-bg-secondary rounded-xl border border-accent-purple/20",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-sm font-semibold text-text-primary mb-2",
                                            children: ""
                                        }), (0, r.jsx)("code", {
                                            className: "text-xs sm:text-sm font-mono text-accent-purple break-all block p-3 bg-bg-primary rounded-lg",
                                            children: ""
                                        }), (0, r.jsx)("p", {
                                            className: "text-xs text-text-muted mt-2",
                                            children: " "
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "p-4 bg-bg-secondary rounded-xl border border-accent-purple/20",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-sm font-semibold text-text-primary mb-2",
                                            children: "Deployer Address"
                                        }), (0, r.jsx)("code", {
                                            className: "text-xs sm:text-sm font-mono text-text-secondary break-all block p-3 bg-bg-primary rounded-lg",
                                            children: "0xd0F68ca2bF30799c4aE1F57103533F5ede8E7949"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "grid sm:grid-cols-2 gap-3 mt-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "p-3 bg-bg-secondary rounded-xl flex items-center gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-success text-lg",
                                                children: "✅"
                                            }), (0, r.jsx)("span", {
                                                className: "text-sm text-text-primary",
                                                children: "Ownership renounced to 0x0"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "p-3 bg-bg-secondary rounded-xl flex items-center gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-success text-lg",
                                                children: "✅"
                                            }), (0, r.jsx)("span", {
                                                className: "text-sm text-text-primary",
                                                children: "No Hidden Functions"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "p-3 bg-bg-secondary rounded-xl flex items-center gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-success text-lg",
                                                children: "✅"
                                            }), (0, r.jsx)("span", {
                                                className: "text-sm text-text-primary",
                                                children: "No admin functions in contract"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "p-3 bg-bg-secondary rounded-xl flex items-center gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-success text-lg",
                                                children: "✅"
                                            }), (0, r.jsx)("span", {
                                                className: "text-sm text-text-primary",
                                                children: "All parameters hardcoded in contract"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        91232: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return x
                }
            });
            var r = t(57437),
                n = t(2265),
                a = t(61396),
                o = t.n(a),
                c = t(16691),
                l = t.n(c),
                i = t(14701);
            let d = {
                contract: "https://bscscan.com/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061",
                telegram: "https://t.me/CashbondOfficial",
                docs: "/docs.html",
                network: "/network.html",
                trust: "/trust.html"
            };

            function x() {
                let [e, s] = (0, n.useState)(!1);
                return (0, r.jsxs)("header", {
                    className: "sticky top-0 z-50 w-full bg-bg-primary/80 backdrop-blur-xl border-b border-black/5",
                    children: [(0, r.jsx)("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: (0, r.jsxs)("div", {
                            className: "flex items-center justify-between h-16 sm:h-20",
                            children: [(0, r.jsxs)(o(), {
                                href: "/",
                                className: "flex items-center gap-2.5 group",
                                children: [(0, r.jsx)("img", {
                                    src: "logo.png",
                                    alt: "Cashbond",
                                    width: 36,
                                    height: 36,
                                    className: "rounded-lg sm:w-10 sm:h-10 group-hover:scale-105 transition-transform duration-200"
                                }), (0, r.jsxs)("span", {
                                    className: "text-lg sm:text-xl font-bold text-text-primary tracking-tight",
                                    children: ["Cash", (0, r.jsx)("span", {
                                        className: "text-accent-purple",
                                        children: "Bond"
                                    })]
                                })]
                            }), (0, r.jsxs)("nav", {
                                className: "hidden lg:flex items-center gap-1",
                                children: [(0, r.jsx)(o(), {
                                    href: "/",
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    children: "Dashboard"
                                }), (0, r.jsx)(o(), {
                                    href: d.docs,
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    children: "Docs"
                                }), (0, r.jsx)(o(), {
                                    href: d.trust,
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    children: "Trust"
                                }), (0, r.jsx)(o(), {
                                    href: d.network,
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    children: "Network"
                                }), (0, r.jsx)("a", {
                                    href: "/#roi-calculator",
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    onClick: e => {
                                        var s;
                                        e.preventDefault(), null === (s = document.querySelector("#roi-calculator")) || void 0 === s || s.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    },
                                    children: "Calculator"
                                }), (0, r.jsxs)("a", {
                                    href: d.contract,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5 flex items-center gap-1.5",
                                    children: ["Contract", (0, r.jsx)("svg", {
                                        className: "w-3.5 h-3.5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        })
                                    })]
                                }), (0, r.jsxs)("a", {
                                    href: d.telegram,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5 flex items-center gap-1.5",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: (0, r.jsx)("path", {
                                            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.234.17.331.015.098.034.322.019.496z"
                                        })
                                    }), "Community"]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, r.jsxs)("div", {
                                    className: "hidden md:flex items-center gap-2 px-3 py-1.5 bg-success-bg rounded-full",
                                    children: [(0, r.jsx)("span", {
                                        className: "status-dot-animated",
                                        style: {
                                            width: "8px",
                                            height: "8px",
                                            background: "var(--success)"
                                        }
                                    }), (0, r.jsx)("span", {
                                        className: "text-xs font-semibold text-success",
                                        children: "Live on BSC"
                                    })]
                                }), (0, r.jsx)("button", {
                                    onClick: () => s(!e),
                                    className: "lg:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary rounded-lg transition-colors",
                                    children: (0, r.jsx)("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: e ? (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }) : (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        })
                                    })
                                }), (0, r.jsx)(i.NL, {
                                    chainStatus: "icon",
                                    showBalance: !1
                                })]
                            })]
                        })
                    }), e && (0, r.jsx)("div", {
                        className: "lg:hidden border-t border-black/5 bg-bg-primary animate-fade-in",
                        children: (0, r.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4 py-4 space-y-1",
                            children: [(0, r.jsx)(o(), {
                                href: "/",
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => s(!1),
                                children: "Dashboard"
                            }), (0, r.jsx)(o(), {
                                href: d.docs,
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => s(!1),
                                children: "Documentation"
                            }), (0, r.jsx)(o(), {
                                href: d.trust,
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => s(!1),
                                children: "Trust & Security"
                            }), (0, r.jsx)(o(), {
                                href: d.network,
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => s(!1),
                                children: "Network Stats"
                            }), (0, r.jsx)("a", {
                                href: "/#roi-calculator",
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: e => {
                                    var t;
                                    e.preventDefault(), s(!1), null === (t = document.querySelector("#roi-calculator")) || void 0 === t || t.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                },
                                children: "Calculator"
                            }), (0, r.jsxs)("a", {
                                href: d.contract,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-between px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => s(!1),
                                children: [(0, r.jsx)("span", {
                                    children: "Smart Contract"
                                }), (0, r.jsx)("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    })
                                })]
                            }), (0, r.jsxs)("a", {
                                href: d.telegram,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-between px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => s(!1),
                                children: [(0, r.jsxs)("span", {
                                    className: "flex items-center gap-2",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: (0, r.jsx)("path", {
                                            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.234.17.331.015.098.034.322.019.496z"
                                        })
                                    }), "Telegram Community"]
                                }), (0, r.jsx)("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "pt-4 mt-4 border-t border-black/5",
                                children: (0, r.jsxs)("div", {
                                    className: "flex items-center gap-2 px-4 py-3 bg-success-bg rounded-xl",
                                    children: [(0, r.jsx)("span", {
                                        className: "status-dot-animated",
                                        style: {
                                            width: "8px",
                                            height: "8px",
                                            background: "var(--success)"
                                        }
                                    }), (0, r.jsx)("span", {
                                        className: "text-sm font-semibold text-success",
                                        children: "Live on BSC"
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [9472, 5250, 1180, 8360, 2971, 4938, 1744], function() {
            return e(e.s = 81894)
        }), _N_E = e.O()
    }
]);