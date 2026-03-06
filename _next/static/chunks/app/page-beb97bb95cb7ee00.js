(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        79880: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 18988))
        },
        18988: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s(57437),
                r = s(3605),
                n = s(16691),
                i = s.n(n),
                l = s(91232),
                c = s(2265),
                o = s(72886),
                d = s(5925),
                x = s(90642),
                m = s(53731),
                h = s(6771);
            let u = ["Starter", "Bronze", "Silver", "Gold", "Diamond"],
                p = ["⭐", "\uD83E\uDD49", "\uD83E\uDD48", "\uD83E\uDD47", "\uD83D\uDC8E"],
                j = ["text-text-muted", "text-amber-600", "text-gray-400", "text-yellow-500", "text-cyan-400"];

            function b(e) {
                let {
                    directReferrals: t,
                    activeDirects: s,
                    currentTier: r,
                    currentRate: n,
                    nextTierDirectsNeeded: i,
                    totalEarnings: l,
                    estimatedDailyEarnings: o,
                    meetsMinStake: d = !0
                } = e, [x, m] = (0, c.useState)(!1), b = u[r] || "Starter", f = p[r] || "⭐", g = j[r] || "text-text-muted", v = (n / 100).toFixed(1);
                return (0, a.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center gap-3 p-4 bg-gradient-subtle rounded-2xl",
                        children: [(0, a.jsx)("span", {
                            className: "text-3xl",
                            children: f
                        }), (0, a.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, a.jsxs)("p", {
                                className: "text-lg font-bold ".concat(g),
                                children: [b, " Tier"]
                            }), (0, a.jsxs)("p", {
                                className: "text-sm text-text-muted",
                                children: ["Earning ", (0, a.jsxs)("span", {
                                    className: "font-semibold text-success",
                                    children: [v, "%"]
                                }), " on all direct referrals' rewards"]
                            })]
                        }), i > 0 && (0, a.jsxs)("div", {
                            className: "text-right",
                            children: [(0, a.jsx)("p", {
                                className: "text-xs text-text-muted",
                                children: "Next tier in"
                            }), (0, a.jsxs)("p", {
                                className: "text-sm font-bold text-accent-purple",
                                children: [i, " more directs"]
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "grid grid-cols-5 gap-3",
                        children: [(0, a.jsxs)("div", {
                            className: "bg-bg-secondary rounded-xl p-4 text-center",
                            children: [(0, a.jsx)("p", {
                                className: "text-2xl font-bold text-text-primary",
                                children: t
                            }), (0, a.jsx)("p", {
                                className: "text-xs text-text-muted mt-1",
                                children: "Total Directs"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "bg-success-bg rounded-xl p-4 text-center",
                            children: [(0, a.jsx)("p", {
                                className: "text-2xl font-bold text-success",
                                children: s
                            }), (0, a.jsx)("p", {
                                className: "text-xs text-text-muted mt-1",
                                children: "Active"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "bg-[rgba(123,97,255,0.1)] rounded-xl p-4 text-center",
                            children: [(0, a.jsxs)("p", {
                                className: "text-2xl font-bold ".concat(g),
                                children: [v, "%"]
                            }), (0, a.jsx)("p", {
                                className: "text-xs text-text-muted mt-1",
                                children: "Rate"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "bg-[rgba(0,210,190,0.08)] rounded-xl p-4 text-center",
                            children: [(0, a.jsx)("p", {
                                className: "text-2xl font-bold text-accent-cyan",
                                children: o || "$0"
                            }), (0, a.jsx)("p", {
                                className: "text-xs text-text-muted mt-1",
                                children: "Est. Daily"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "bg-gradient-subtle rounded-xl p-4 text-center",
                            children: [(0, a.jsx)("p", {
                                className: "text-2xl font-bold gradient-text",
                                children: l
                            }), (0, a.jsx)("p", {
                                className: "text-xs text-text-muted mt-1",
                                children: "Lifetime"
                            })]
                        })]
                    }), (0, a.jsxs)("button", {
                        onClick: () => m(!x),
                        className: "w-full flex items-center justify-between py-3 px-4 bg-bg-secondary rounded-xl hover:bg-bg-tertiary transition-colors",
                        children: [(0, a.jsx)("span", {
                            className: "text-sm font-medium text-text-secondary",
                            children: "Tier Requirements & Rates"
                        }), (0, a.jsx)("svg", {
                            className: "w-5 h-5 text-text-muted transition-transform ".concat(x ? "rotate-180" : ""),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, a.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7"
                            })
                        })]
                    }), x && (0, a.jsxs)("div", {
                        className: "bg-bg-secondary rounded-2xl p-4 overflow-x-auto animate-fade-in",
                        children: [(0, a.jsxs)("table", {
                            className: "w-full text-sm",
                            children: [(0, a.jsx)("thead", {
                                children: (0, a.jsxs)("tr", {
                                    className: "text-left text-text-muted border-b border-black/5",
                                    children: [(0, a.jsx)("th", {
                                        className: "pb-3 font-medium",
                                        children: "Tier"
                                    }), (0, a.jsx)("th", {
                                        className: "pb-3 font-medium",
                                        children: "Rate"
                                    }), (0, a.jsx)("th", {
                                        className: "pb-3 font-medium",
                                        children: "Active Directs"
                                    }), (0, a.jsx)("th", {
                                        className: "pb-3 font-medium text-right",
                                        children: "Status"
                                    })]
                                })
                            }), (0, a.jsx)("tbody", {
                                className: "divide-y divide-black/5",
                                children: h.dm.map((e, t) => {
                                    let n = t <= r,
                                        i = t === r;
                                    return (0, a.jsxs)("tr", {
                                        className: "text-text-primary",
                                        children: [(0, a.jsx)("td", {
                                            className: "py-3",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, a.jsx)("span", {
                                                    className: "text-lg",
                                                    children: p[t]
                                                }), (0, a.jsx)("span", {
                                                    className: "font-semibold ".concat(i ? j[t] : "text-text-secondary"),
                                                    children: e.name
                                                })]
                                            })
                                        }), (0, a.jsx)("td", {
                                            className: "py-3",
                                            children: (0, a.jsxs)("span", {
                                                className: "font-semibold ".concat(n ? "text-success" : "text-text-muted"),
                                                children: [e.rate, "%"]
                                            })
                                        }), (0, a.jsx)("td", {
                                            className: "py-3",
                                            children: (0, a.jsxs)("span", {
                                                className: s >= e.directs ? "text-success font-medium" : "text-text-muted",
                                                children: [0 === e.directs ? "Any" : "".concat(e.directs, "+"), " directs"]
                                            })
                                        }), (0, a.jsx)("td", {
                                            className: "py-3 text-right",
                                            children: i ? (0, a.jsx)("span", {
                                                className: "inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full",
                                                children: "Current"
                                            }) : n ? (0, a.jsxs)("span", {
                                                className: "inline-flex items-center gap-1 px-2.5 py-1 bg-success-bg text-success text-xs font-semibold rounded-full",
                                                children: [(0, a.jsx)("svg", {
                                                    className: "w-3 h-3",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 3,
                                                    children: (0, a.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M5 13l4 4L19 7"
                                                    })
                                                }), "Passed"]
                                            }) : (0, a.jsxs)("span", {
                                                className: "inline-flex items-center gap-1 px-2.5 py-1 bg-bg-tertiary text-text-muted text-xs font-semibold rounded-full",
                                                children: [e.directs - s, " more"]
                                            })
                                        })]
                                    }, e.name)
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mt-4 pt-4 border-t border-black/5 space-y-2",
                            children: [(0, a.jsxs)("p", {
                                className: "text-xs text-text-muted",
                                children: [(0, a.jsx)("strong", {
                                    className: "text-text-secondary",
                                    children: "How it works:"
                                }), " You earn a % of your ", (0, a.jsx)("em", {
                                    children: "direct"
                                }), " referrals' daily ROI rewards. No multi-level, no team depth — just rewards for the people YOU bring in."]
                            }), (0, a.jsxs)("p", {
                                className: "text-xs text-text-muted",
                                children: [(0, a.jsx)("strong", {
                                    className: "text-text-secondary",
                                    children: "Requirements:"
                                }), " $50 minimum self-stake to earn. Active direct = referral with $50+ staked."]
                            }), (0, a.jsxs)("p", {
                                className: "text-xs text-text-muted",
                                children: [(0, a.jsx)("strong", {
                                    className: "text-text-secondary",
                                    children: "When do commissions credit?"
                                }), " Your referral commission is automatically calculated and added to your claimable balance each time one of your referrals interacts with the contract (deposits, withdraws, or claims rewards). The \"Est. Daily\" figure above shows what you're projected to earn based on your referrals' current stakes."]
                            }), !d && (0, a.jsx)("p", {
                                className: "text-xs text-yellow-500 font-medium",
                                children: "⚠️ You need at least $50 staked to earn referral commissions. Increase your stake to activate."
                            })]
                        })]
                    })]
                })
            }
            let f = ["Starter", "Bronze", "Silver", "Gold", "Diamond"],
                g = ["⭐", "\uD83E\uDD49", "\uD83E\uDD48", "\uD83E\uDD47", "\uD83D\uDC8E"];

            function v() {
                var e;
                let {
                    isConnected: t,
                    isCorrectChain: s,
                    address: n,
                    connect: i
                } = (0, x.O)(), {
                    userInfo: l,
                    tierStatus: u,
                    referralEstimate: p,
                    usdtBalance: j,
                    isLoading: v,
                    isApproving: N,
                    needsApproval: y,
                    approve: w,
                    deposit: k,
                    withdraw: C,
                    claimRewards: S
                } = (0, m.n)(), [_, L] = (0, c.useState)(""), [M, D] = (0, c.useState)(""), [F, B] = (0, c.useState)(""), [z, R] = (0, c.useState)("deposit"), [A, E] = (0, c.useState)(!0), [W, I] = (0, c.useState)(BigInt(0)), [T, $] = (0, c.useState)(Date.now()), H = (null == l ? void 0 : l.stakedAmount) || BigInt(0), P = (null == l ? void 0 : l.pendingRewards) || BigInt(0);
                (0, c.useEffect)(() => {
                    {
                        let e = new URLSearchParams(window.location.search).get("ref");
                        e && e.startsWith("0x") && 42 === e.length && (B(e), (0, o.v4)(e))
                    }
                }, []), (0, c.useEffect)(() => {
                    I(P), $(Date.now())
                }, [P]), (0, c.useEffect)(() => {
                    if (H === BigInt(0)) return;
                    let e = H * BigInt(150),
                        t = BigInt(1e4) * BigInt(86400) * BigInt(1e3),
                        s = setInterval(() => {
                            I(P + e * BigInt(Date.now() - T) / t)
                        }, 1e3);
                    return () => clearInterval(s)
                }, [H, P, T]);
                let O = e => (Math.floor(100 * parseFloat((0, r.dF)(e))) / 100).toFixed(2),
                    V = async () => {
                        if (!_ || 0 >= parseFloat(_)) return;
                        if (1 > parseFloat(_)) {
                            d.default.error("Minimum deposit is $1.00 USDT");
                            return
                        }
                        let e = !!F && "0x0000000000000000000000000000000000000000" !== F;
                        (0, o.i2)(_, e), await k(_, F || "0x0000000000000000000000000000000000000000"), L("")
                    }, U = async () => {
                        !M || 0 >= parseFloat(M) || ((0, o.Hd)(M), await C(M), D(""))
                    }, Y = e => parseFloat((0, r.dF)(e)).toLocaleString(void 0, {
                        maximumFractionDigits: 2
                    });
                if (!t || !s) return (0, a.jsx)("div", {
                    className: "market-card",
                    children: (0, a.jsxs)("div", {
                        className: "p-8 sm:p-12 text-center",
                        children: [(0, a.jsxs)("div", {
                            className: "relative w-24 h-24 mx-auto mb-8",
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-primary rounded-3xl animate-pulse-glow"
                            }), (0, a.jsx)("div", {
                                className: "absolute inset-2 bg-bg-primary rounded-2xl flex items-center justify-center",
                                children: (0, a.jsx)("svg", {
                                    className: "w-10 h-10 text-accent-purple",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 1.5,
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                    })
                                })
                            })]
                        }), (0, a.jsx)("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-text-primary mb-3",
                            children: "Start Earning Today"
                        }), (0, a.jsx)("p", {
                            className: "text-text-secondary mb-8 max-w-sm mx-auto",
                            children: "Connect your wallet to access the dashboard and start earning 1.5% daily on your USDT deposits"
                        }), (0, a.jsx)("button", {
                            onClick: i,
                            className: "btn-primary text-base px-8 py-4 rounded-xl w-full sm:w-auto",
                            children: "Connect Wallet"
                        }), (0, a.jsxs)("div", {
                            className: "grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-black/5",
                            children: [(0, a.jsxs)("div", {
                                className: "p-4 bg-gradient-subtle rounded-xl",
                                children: [(0, a.jsx)("p", {
                                    className: "text-3xl font-bold gradient-text",
                                    children: "547.5%"
                                }), (0, a.jsx)("p", {
                                    className: "text-text-muted text-sm mt-1",
                                    children: "Annual APR"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "p-4 bg-success-bg rounded-xl",
                                children: [(0, a.jsx)("p", {
                                    className: "text-3xl font-bold text-success",
                                    children: "1.5%"
                                }), (0, a.jsx)("p", {
                                    className: "text-text-muted text-sm mt-1",
                                    children: "Daily Yield"
                                })]
                            })]
                        })]
                    })
                });
                let q = (null == l ? void 0 : l.pendingReferralRewards) || BigInt(0),
                    Z = (null == l ? void 0 : l.referralEarnings) || BigInt(0),
                    G = H * BigInt(150) / BigInt(1e4),
                    K = W + q,
                    X = (null == p ? void 0 : p.estimatedDailyRefEarnings) || BigInt(0),
                    J = null === (e = null == p ? void 0 : p.meetsMinStake) || void 0 === e || e,
                    Q = (null == u ? void 0 : u.currentTier) || 0,
                    ee = (null == u ? void 0 : u.currentRate) || 500,
                    et = (ee / 100).toFixed(1),
                    es = f[Q] || "Starter",
                    ea = g[Q] || "⭐";
                return (0, a.jsxs)("div", {
                    className: "space-y-6",
                    children: [(0, a.jsxs)("div", {
                        className: "market-card",
                        children: [(0, a.jsxs)("div", {
                            className: "market-header",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, a.jsx)("div", {
                                    className: "w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center",
                                    children: (0, a.jsx)("svg", {
                                        className: "w-5 h-5 text-white",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, a.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        })
                                    })
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-lg font-semibold text-text-primary",
                                        children: "Your Portfolio"
                                    }), (0, a.jsx)("p", {
                                        className: "text-xs text-text-muted",
                                        children: "Real-time balance"
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "badge badge-live",
                                children: [(0, a.jsx)("span", {
                                    className: "status-dot"
                                }), "LIVE"]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "market-body",
                            children: [(0, a.jsxs)("div", {
                                className: "text-center mb-8",
                                children: [(0, a.jsx)("p", {
                                    className: "text-text-muted text-sm mb-2",
                                    children: "Total Balance"
                                }), (0, a.jsxs)("p", {
                                    className: "stat-value-lg",
                                    children: ["$", Y(H + K)]
                                }), (0, a.jsx)("div", {
                                    className: "flex items-center justify-center gap-2 mt-2",
                                    children: (0, a.jsxs)("span", {
                                        className: "badge badge-gradient animate-gradient",
                                        children: ["+$", Y(G), "/day"]
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "grid grid-cols-4 gap-4 p-4 bg-bg-secondary rounded-2xl mb-4",
                                children: [(0, a.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, a.jsxs)("p", {
                                        className: "text-xl sm:text-2xl font-bold text-text-primary",
                                        children: ["$", Y(H)]
                                    }), (0, a.jsx)("p", {
                                        className: "text-xs text-text-muted mt-1",
                                        children: "Staked"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "text-center border-x border-black/5",
                                    children: [(0, a.jsxs)("p", {
                                        className: "text-xl sm:text-2xl font-bold text-success",
                                        children: ["$", Y(W)]
                                    }), (0, a.jsx)("p", {
                                        className: "text-xs text-text-muted mt-1",
                                        children: "Staking ROI"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "text-center border-r border-black/5",
                                    children: [(0, a.jsxs)("p", {
                                        className: "text-xl sm:text-2xl font-bold text-accent-cyan",
                                        children: ["$", Y(q)]
                                    }), (0, a.jsx)("p", {
                                        className: "text-xs text-text-muted mt-1",
                                        children: "Ref Claimable"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, a.jsxs)("p", {
                                        className: "text-xl sm:text-2xl font-bold text-accent-purple",
                                        children: ["$", Y(Z)]
                                    }), (0, a.jsx)("p", {
                                        className: "text-xs text-text-muted mt-1",
                                        children: "Ref Lifetime"
                                    })]
                                })]
                            }), ((null == u ? void 0 : u.totalDirects) || 0) > 0 && (0, a.jsx)("div", {
                                className: "mb-6",
                                children: X > BigInt(0) ? (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2 p-3 bg-[rgba(0,210,190,0.08)] border border-[rgba(0,210,190,0.15)] rounded-xl",
                                    children: [(0, a.jsx)("svg", {
                                        className: "w-4 h-4 text-accent-cyan flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, a.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                        })
                                    }), (0, a.jsxs)("p", {
                                        className: "text-xs text-text-secondary",
                                        children: [(0, a.jsxs)("span", {
                                            className: "font-semibold text-accent-cyan",
                                            children: ["~$", Y(X), "/day"]
                                        }), " estimated from your referrals' stakes. Commissions credit when referrals claim, deposit, or withdraw."]
                                    })]
                                }) : J ? (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2 p-3 bg-bg-secondary rounded-xl",
                                    children: [(0, a.jsx)("svg", {
                                        className: "w-4 h-4 text-text-muted flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, a.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        })
                                    }), (0, a.jsx)("p", {
                                        className: "text-xs text-text-muted",
                                        children: "Referral commissions credit automatically when your referrals interact with the contract (claim, deposit, or withdraw)."
                                    })]
                                }) : (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2 p-3 bg-[rgba(255,170,0,0.08)] border border-[rgba(255,170,0,0.15)] rounded-xl",
                                    children: [(0, a.jsx)("svg", {
                                        className: "w-4 h-4 text-yellow-500 flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0, a.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.072 16.5c-.77.833.192 2.5 1.732 2.5z"
                                        })
                                    }), (0, a.jsxs)("p", {
                                        className: "text-xs text-text-secondary",
                                        children: [(0, a.jsx)("span", {
                                            className: "font-semibold text-yellow-500",
                                            children: "$50 minimum stake required"
                                        }), " to earn referral commissions. Stake $", Y(BigInt(50) * BigInt(1e18) - H), " more to activate."]
                                    })]
                                })
                            }), (0, a.jsx)("button", {
                                onClick: () => {
                                    (0, o.aQ)(Y(K)), S()
                                },
                                disabled: v || K === BigInt(0),
                                className: "btn-primary w-full py-4 rounded-xl text-sm font-semibold disabled:opacity-50",
                                children: v ? "Processing..." : "Claim All Rewards — $".concat(Y(K))
                            }), (0, a.jsxs)("div", {
                                className: "mt-6 p-4 bg-bg-secondary rounded-2xl",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [(0, a.jsx)("span", {
                                        className: "text-sm text-text-muted",
                                        children: "Referral Tier"
                                    }), (0, a.jsxs)("span", {
                                        className: "text-sm font-semibold text-text-primary",
                                        children: [ea, " ", es, " (", et, "%)"]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "progress-bar",
                                    children: (0, a.jsx)("div", {
                                        className: "progress-fill",
                                        style: {
                                            width: "".concat((Q + 1) / 5 * 100, "%")
                                        }
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center justify-between mt-2",
                                    children: [(0, a.jsxs)("span", {
                                        className: "text-xs text-text-muted",
                                        children: ["Active Directs: ", (null == u ? void 0 : u.activeDirects) || 0, "/", (null == u ? void 0 : u.totalDirects) || 0]
                                    }), ((null == u ? void 0 : u.nextTierDirectsNeeded) || 0) > 0 ? (0, a.jsxs)("span", {
                                        className: "text-xs text-accent-purple font-medium",
                                        children: [null == u ? void 0 : u.nextTierDirectsNeeded, " more for next tier!"]
                                    }) : Q >= 4 ? (0, a.jsx)("span", {
                                        className: "text-xs text-cyan-400 font-medium",
                                        children: "Max tier reached! \uD83D\uDC8E"
                                    }) : (0, a.jsx)("span", {
                                        className: "text-xs text-accent-purple font-medium",
                                        children: "Keep inviting!"
                                    })]
                                })]
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "market-card",
                        children: [(0, a.jsx)("div", {
                            className: "market-header",
                            children: (0, a.jsxs)("div", {
                                className: "tab-container flex-1",
                                children: [(0, a.jsx)("button", {
                                    onClick: () => R("deposit"),
                                    className: "tab-btn ".concat("deposit" === z ? "active" : ""),
                                    children: (0, a.jsxs)("span", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [(0, a.jsx)("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 4v16m8-8l-8 8-8-8"
                                            })
                                        }), "Deposit"]
                                    })
                                }), (0, a.jsx)("button", {
                                    onClick: () => R("withdraw"),
                                    className: "tab-btn ".concat("withdraw" === z ? "active" : ""),
                                    children: (0, a.jsxs)("span", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [(0, a.jsx)("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 20V4m-8 8l8-8 8 8"
                                            })
                                        }), "Withdraw"]
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "market-body",
                            children: "deposit" === z ? (0, a.jsxs)("div", {
                                className: "space-y-5",
                                children: [(0, a.jsxs)("div", {
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [(0, a.jsx)("label", {
                                            className: "text-sm font-medium text-text-secondary",
                                            children: "Amount"
                                        }), (0, a.jsxs)("span", {
                                            className: "text-xs text-text-muted",
                                            children: ["Balance: ", (0, a.jsxs)("span", {
                                                className: "font-medium text-text-primary",
                                                children: [Y(j), " USDT"]
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, a.jsx)("input", {
                                            type: "number",
                                            inputMode: "decimal",
                                            value: _,
                                            onChange: e => L(e.target.value),
                                            placeholder: "0.00",
                                            className: "input-field pr-28 text-2xl font-semibold"
                                        }), (0, a.jsxs)("div", {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                            children: [(0, a.jsx)("button", {
                                                onClick: () => L(O(j)),
                                                className: "px-3 py-1.5 text-xs font-bold text-accent-purple bg-accent-purple/10 rounded-lg hover:bg-accent-purple/20 transition-colors",
                                                children: "MAX"
                                            }), (0, a.jsx)("span", {
                                                className: "text-text-muted font-medium text-sm",
                                                children: "USDT"
                                            })]
                                        })]
                                    }), _ && parseFloat(_) > 0 && 1 > parseFloat(_) && (0, a.jsx)("p", {
                                        className: "text-xs text-red-500 mt-1.5",
                                        children: "Minimum deposit is $1.00 USDT"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("label", {
                                        className: "text-sm font-medium text-text-secondary mb-2 block",
                                        children: "Referrer (optional)"
                                    }), (0, a.jsx)("input", {
                                        type: "text",
                                        value: F,
                                        onChange: e => B(e.target.value),
                                        placeholder: "0x...",
                                        className: "input-field text-sm font-mono"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "p-4 bg-bg-secondary rounded-xl space-y-3",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-sm text-text-muted",
                                            children: "You Will Stake"
                                        }), (0, a.jsxs)("span", {
                                            className: "text-sm font-medium text-text-primary",
                                            children: ["$", _ ? parseFloat(_).toFixed(2) : "0.00"]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center justify-between pt-2 border-t border-black/5",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-sm text-text-muted",
                                            children: "Expected Daily Yield"
                                        }), (0, a.jsxs)("span", {
                                            className: "text-sm font-semibold text-success",
                                            children: ["+$", _ ? (.015 * parseFloat(_)).toFixed(2) : "0.00"]
                                        })]
                                    })]
                                }), (0, a.jsx)("button", {
                                    onClick: V,
                                    disabled: v || !_ || 0 >= parseFloat(_) || 1 > parseFloat(_),
                                    className: "btn-primary w-full py-4 rounded-xl text-base font-semibold disabled:opacity-50",
                                    children: v ? (0, a.jsxs)("span", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [(0, a.jsxs)("svg", {
                                            className: "animate-spin h-5 w-5",
                                            viewBox: "0 0 24 24",
                                            children: [(0, a.jsx)("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4",
                                                fill: "none"
                                            }), (0, a.jsx)("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            })]
                                        }), "Processing..."]
                                    }) : "Deposit"
                                })]
                            }) : (0, a.jsxs)("div", {
                                className: "space-y-5",
                                children: [(0, a.jsxs)("div", {
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [(0, a.jsx)("label", {
                                            className: "text-sm font-medium text-text-secondary",
                                            children: "Amount"
                                        }), (0, a.jsxs)("span", {
                                            className: "text-xs text-text-muted",
                                            children: ["Available: ", (0, a.jsxs)("span", {
                                                className: "font-medium text-text-primary",
                                                children: ["$", Y(H)]
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, a.jsx)("input", {
                                            type: "number",
                                            inputMode: "decimal",
                                            value: M,
                                            onChange: e => D(e.target.value),
                                            placeholder: "0.00",
                                            className: "input-field pr-28 text-2xl font-semibold"
                                        }), (0, a.jsxs)("div", {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                            children: [(0, a.jsx)("button", {
                                                onClick: () => D(O(H)),
                                                className: "px-3 py-1.5 text-xs font-bold text-accent-purple bg-accent-purple/10 rounded-lg hover:bg-accent-purple/20 transition-colors",
                                                children: "MAX"
                                            }), (0, a.jsx)("span", {
                                                className: "text-text-muted font-medium text-sm",
                                                children: "USDT"
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "p-4 bg-bg-secondary rounded-xl space-y-3",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-sm text-text-muted",
                                            children: "Withdrawal Limit"
                                        }), (0, a.jsx)("span", {
                                            className: "text-sm font-medium text-success",
                                            children: "No limit — withdraw anytime"
                                        })]
                                    })
                                }), (0, a.jsx)("button", {
                                    onClick: U,
                                    disabled: v || !M || 0 >= parseFloat(M),
                                    className: "btn-primary w-full py-4 rounded-xl text-base font-semibold disabled:opacity-50",
                                    children: v ? "Processing..." : "Withdraw"
                                })]
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "market-card",
                        children: [(0, a.jsxs)("div", {
                            className: "market-header cursor-pointer",
                            onClick: () => E(!A),
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, a.jsx)("div", {
                                    className: "w-10 h-10 bg-accent-purple/10 rounded-xl flex items-center justify-center",
                                    children: (0, a.jsx)("span", {
                                        className: "text-xl",
                                        children: ea
                                    })
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-lg font-semibold text-text-primary",
                                        children: "Direct Referral Program"
                                    }), (0, a.jsxs)("p", {
                                        className: "text-xs text-text-muted",
                                        children: [es, " tier — earn ", et, "% on your direct referrals' rewards"]
                                    })]
                                })]
                            }), (0, a.jsx)("svg", {
                                className: "w-5 h-5 text-text-muted transition-transform ".concat(A ? "rotate-180" : ""),
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M19 9l-7 7-7-7"
                                })
                            })]
                        }), A && (0, a.jsxs)("div", {
                            className: "market-body border-t border-black/5 animate-fade-in",
                            children: [(0, a.jsxs)("div", {
                                className: "mb-6",
                                children: [(0, a.jsx)("label", {
                                    className: "text-sm font-medium text-text-secondary mb-2 block",
                                    children: "Your Referral Link"
                                }), (0, a.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, a.jsx)("input", {
                                        type: "text",
                                        readOnly: !0,
                                        value: n ? "".concat(window.location.origin, "?ref=").concat(n) : "",
                                        className: "input-field flex-1 text-sm font-mono bg-bg-secondary"
                                    }), (0, a.jsx)("button", {
                                        onClick: () => {
                                            n && (navigator.clipboard.writeText("".concat(window.location.origin, "?ref=").concat(n)), (0, o.Cs)(), d.default.success("Referral link copied!"))
                                        },
                                        className: "btn-primary px-6 rounded-xl",
                                        children: (0, a.jsx)("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                            })
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "grid grid-cols-5 gap-2 mb-6",
                                children: h.dm.map((e, t) => (0, a.jsxs)("div", {
                                    className: "\n                    text-center p-3 rounded-xl border transition-colors\n                    ".concat(t === Q ? "bg-gradient-primary text-white border-transparent" : t < Q ? "bg-success-bg border-success/20" : "bg-bg-secondary border-black/5", "\n                  "),
                                    children: [(0, a.jsxs)("p", {
                                        className: "text-lg font-bold ".concat(t === Q ? "text-white" : t < Q ? "text-success" : "text-text-muted"),
                                        children: [e.rate, "%"]
                                    }), (0, a.jsx)("p", {
                                        className: "text-xs mt-1 ".concat(t === Q ? "text-white/70" : "text-text-muted"),
                                        children: e.name
                                    })]
                                }, e.name))
                            }), (0, a.jsx)(b, {
                                directReferrals: (null == u ? void 0 : u.totalDirects) || 0,
                                activeDirects: (null == u ? void 0 : u.activeDirects) || 0,
                                currentTier: Q,
                                currentRate: ee,
                                nextTierDirectsNeeded: (null == u ? void 0 : u.nextTierDirectsNeeded) || 0,
                                totalEarnings: "$".concat(Y(Z)),
                                estimatedDailyEarnings: X > BigInt(0) ? "$".concat(Y(X)) : void 0,
                                meetsMinStake: J
                            })]
                        })]
                    })]
                })
            }

            function N() {
                let [e, t] = (0, c.useState)([]), [s, r] = (0, c.useState)(!0), n = (0, c.useCallback)(async () => {
                    try {
                        let e = await fetch("/api/events?_t=".concat(Date.now()), {
                            cache: "no-store"
                        });
                        if (!e.ok) throw Error("Failed to fetch events");
                        let s = await e.json();
                        s.events && Array.isArray(s.events) && t(s.events)
                    } catch (e) {
                        console.error("Error fetching events:", e)
                    } finally {
                        r(!1)
                    }
                }, []);
                (0, c.useEffect)(() => {
                    n();
                    let e = setInterval(n, 1e4);
                    return () => clearInterval(e)
                }, [n]);
                let i = e => {
                    switch (e) {
                        case "deposit":
                            return {
                                icon: (0, a.jsx)("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M12 4v16m8-8l-8 8-8-8"
                                    })
                                }), label: "Staked", bgClass: "bg-success-bg", textClass: "text-success"
                            };
                        case "withdraw":
                            return {
                                icon: (0, a.jsx)("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M12 20V4m-8 8l8-8 8 8"
                                    })
                                }), label: "Withdrew", bgClass: "bg-warning-bg", textClass: "text-warning"
                            };
                        case "referral":
                            return {
                                icon: (0, a.jsx)("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                    })
                                }), label: "Referral Bonus", bgClass: "bg-[rgba(123,97,255,0.1)]", textClass: "text-accent-purple"
                            };
                        case "claim":
                            return {
                                icon: (0, a.jsx)("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }), label: "Claimed", bgClass: "bg-[rgba(0,212,255,0.1)]", textClass: "text-accent-cyan"
                            }
                    }
                };
                return (0, a.jsxs)("div", {
                    className: "glass-card p-5 sm:p-6",
                    children: [(0, a.jsx)("div", {
                        className: "flex items-center justify-between mb-5",
                        children: (0, a.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, a.jsx)("h3", {
                                className: "text-base font-semibold text-text-primary",
                                children: "Live Activity"
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center gap-1.5 px-2.5 py-1 bg-success-bg rounded-full",
                                children: [(0, a.jsx)("span", {
                                    className: "status-dot-animated",
                                    style: {
                                        width: "6px",
                                        height: "6px",
                                        background: "var(--success)"
                                    }
                                }), (0, a.jsx)("span", {
                                    className: "text-xs font-semibold text-success",
                                    children: "LIVE"
                                })]
                            })]
                        })
                    }), s ? (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center py-10",
                        children: [(0, a.jsxs)("svg", {
                            className: "animate-spin h-8 w-8 text-accent-purple mb-3",
                            viewBox: "0 0 24 24",
                            children: [(0, a.jsx)("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                                fill: "none"
                            }), (0, a.jsx)("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            })]
                        }), (0, a.jsx)("p", {
                            className: "text-sm text-text-muted",
                            children: "Loading on-chain events..."
                        })]
                    }) : 0 === e.length ? (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center py-10 text-center",
                        children: [(0, a.jsx)("div", {
                            className: "w-14 h-14 bg-gradient-subtle rounded-2xl flex items-center justify-center mb-4",
                            children: (0, a.jsx)("svg", {
                                className: "w-7 h-7 text-accent-purple",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 1.5,
                                children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                })
                            })
                        }), (0, a.jsx)("p", {
                            className: "text-sm font-medium text-text-primary mb-1",
                            children: "No Recent Activity"
                        }), (0, a.jsx)("p", {
                            className: "text-xs text-text-muted max-w-[200px]",
                            children: "Events will appear here as users interact with the protocol."
                        })]
                    }) : (0, a.jsx)("div", {
                        className: "space-y-3 max-h-[360px] overflow-y-auto pr-1",
                        children: e.map((e, t) => {
                            let s = i(e.type);
                            return (0, a.jsxs)("a", {
                                href: "https://bscscan.com/tx/".concat(e.txHash),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "activity-item block hover:bg-bg-tertiary/50 transition-colors rounded-xl",
                                style: {
                                    animationDelay: "".concat(.05 * t, "s")
                                },
                                children: [(0, a.jsx)("div", {
                                    className: "activity-icon ".concat(s.bgClass, " ").concat(s.textClass),
                                    children: s.icon
                                }), (0, a.jsxs)("div", {
                                    className: "flex-1 min-w-0",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center justify-between gap-2",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-sm font-medium text-text-primary truncate",
                                            children: e.address
                                        }), (0, a.jsx)("svg", {
                                            className: "w-3 h-3 text-text-muted flex-shrink-0",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center justify-between mt-0.5",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-xs text-text-muted",
                                                children: s.label
                                            }), (0, a.jsxs)("span", {
                                                className: "text-sm font-semibold ".concat(s.textClass),
                                                children: ["$", e.amount]
                                            })]
                                        }), e.timestamp > 0 && (0, a.jsx)("span", {
                                            className: "text-[10px] text-text-muted/60 tabular-nums",
                                            children: function(e) {
                                                let t = Math.floor((Date.now() - e) / 1e3);
                                                if (t < 60) return "".concat(t, "s ago");
                                                let s = Math.floor(t / 60);
                                                if (s < 60) return "".concat(s, "m ago");
                                                let a = Math.floor(s / 60);
                                                return a < 24 ? "".concat(a, "h ago") : "".concat(Math.floor(a / 24), "d ago")
                                            }(e.timestamp)
                                        })]
                                    })]
                                })]
                            }, e.id)
                        })
                    }), (0, a.jsx)("div", {
                        className: "mt-5 pt-4 border-t border-black/5",
                        children: (0, a.jsxs)("a", {
                            href: "https://bscscan.com/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-2 text-xs text-text-muted hover:text-accent-purple transition-colors",
                            children: [(0, a.jsx)("span", {
                                children: "View all on BSCScan"
                            }), (0, a.jsx)("svg", {
                                className: "w-3 h-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                            })]
                        })
                    })]
                })
            }
            var y = s(69102),
                w = s.n(y);

            function k() {
                let [e, t] = (0, c.useState)("1000"), [s, r] = (0, c.useState)("30"), [n] = (0, c.useState)(1.5), [i, l] = (0, c.useState)(0), [o, d] = (0, c.useState)(0), [x, m] = (0, c.useState)(0), [h, u] = (0, c.useState)(0), [p, j] = (0, c.useState)(0), b = (0, c.useMemo)(() => {
                    let t = parseFloat(e) || 0,
                        a = parseInt(s) || 0,
                        r = n / 100,
                        i = [],
                        l = Math.max(1, Math.floor(a / 30));
                    for (let e = 0; e <= a; e += l) {
                        let s = t + t * r * e,
                            a = t * Math.pow(1 + r, e);
                        i.push({
                            day: e,
                            simple: s,
                            compound: a
                        })
                    }
                    if (i[i.length - 1].day !== a) {
                        let e = t + t * r * a,
                            s = t * Math.pow(1 + r, a);
                        i.push({
                            day: a,
                            simple: e,
                            compound: s
                        })
                    }
                    return i
                }, [e, s, n]);
                (0, c.useMemo)(() => Math.max(...b.map(e => Math.max(e.simple, e.compound))), [b]), (0, c.useEffect)(() => {
                    let t = parseFloat(e) || 0,
                        a = parseInt(s) || 0,
                        r = n / 100,
                        i = t * r * a,
                        c = t * Math.pow(1 + r, a),
                        o = c - t;
                    l(i), d(o), m(t + i), u(c), j(o - i)
                }, [e, s, n]);
                let f = e => e.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                return (0, a.jsxs)("div", {
                    className: "jsx-a7328a551d5cb912 glass-card p-3 sm:p-5 hover-float",
                    children: [(0, a.jsxs)("div", {
                        className: "jsx-a7328a551d5cb912 flex items-center gap-2 mb-4",
                        children: [(0, a.jsx)("div", {
                            className: "jsx-a7328a551d5cb912 w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center",
                            children: (0, a.jsx)("svg", {
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                className: "jsx-a7328a551d5cb912 w-6 h-6 text-white",
                                children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                                    className: "jsx-a7328a551d5cb912"
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "jsx-a7328a551d5cb912",
                            children: [(0, a.jsx)("h2", {
                                className: "jsx-a7328a551d5cb912 text-2xl font-bold gradient-text",
                                children: "Calculator"
                            }), (0, a.jsx)("p", {
                                className: "jsx-a7328a551d5cb912 text-text-muted text-xs",
                                children: "Project your earnings"
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "jsx-a7328a551d5cb912 space-y-4 mb-4",
                        children: [(0, a.jsxs)("div", {
                            className: "jsx-a7328a551d5cb912",
                            children: [(0, a.jsxs)("div", {
                                className: "jsx-a7328a551d5cb912 flex items-center justify-between mb-2",
                                children: [(0, a.jsx)("label", {
                                    className: "jsx-a7328a551d5cb912 text-xs font-semibold text-text-muted",
                                    children: "Investment Amount"
                                }), (0, a.jsxs)("div", {
                                    className: "jsx-a7328a551d5cb912 text-xl font-bold gradient-text",
                                    children: ["$", f(parseFloat(e) || 0)]
                                })]
                            }), (0, a.jsx)("input", {
                                type: "range",
                                min: "100",
                                max: "50000",
                                step: "100",
                                value: e,
                                onChange: e => t(e.target.value),
                                className: "jsx-a7328a551d5cb912 w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer range-slider"
                            }), (0, a.jsxs)("div", {
                                className: "jsx-a7328a551d5cb912 flex justify-between text-xs text-text-muted mt-2 mb-4",
                                children: [(0, a.jsx)("span", {
                                    className: "jsx-a7328a551d5cb912",
                                    children: "$100"
                                }), (0, a.jsx)("span", {
                                    className: "jsx-a7328a551d5cb912",
                                    children: "$50,000"
                                })]
                            }), (0, a.jsx)("div", {
                                className: "jsx-a7328a551d5cb912 flex flex-wrap gap-2",
                                children: [100, 500, 1e3, 5e3, 1e4].map(s => (0, a.jsxs)("button", {
                                    onClick: () => t(s.toString()),
                                    className: "jsx-a7328a551d5cb912 " + "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ".concat(e === s.toString() ? "bg-gradient-primary text-white shadow-glow" : "bg-bg-secondary text-text-secondary hover:bg-bg-tertiary hover:text-accent-purple"),
                                    children: ["$", s.toLocaleString()]
                                }, s))
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "jsx-a7328a551d5cb912",
                            children: [(0, a.jsxs)("div", {
                                className: "jsx-a7328a551d5cb912 flex items-center justify-between mb-2",
                                children: [(0, a.jsx)("label", {
                                    className: "jsx-a7328a551d5cb912 text-xs font-semibold text-text-muted",
                                    children: "Time Period"
                                }), (0, a.jsxs)("div", {
                                    className: "jsx-a7328a551d5cb912 text-xl font-bold text-accent-cyan",
                                    children: [s, " days"]
                                })]
                            }), (0, a.jsx)("input", {
                                type: "range",
                                min: "1",
                                max: "365",
                                step: "1",
                                value: s,
                                onChange: e => r(e.target.value),
                                className: "jsx-a7328a551d5cb912 w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer range-slider"
                            }), (0, a.jsxs)("div", {
                                className: "jsx-a7328a551d5cb912 flex justify-between text-xs text-text-muted mt-2 mb-4",
                                children: [(0, a.jsx)("span", {
                                    className: "jsx-a7328a551d5cb912",
                                    children: "1 day"
                                }), (0, a.jsx)("span", {
                                    className: "jsx-a7328a551d5cb912",
                                    children: "365 days"
                                })]
                            }), (0, a.jsx)("div", {
                                className: "jsx-a7328a551d5cb912 flex flex-wrap gap-2",
                                children: [7, 14, 30, 60, 90, 180, 365].map(e => (0, a.jsxs)("button", {
                                    onClick: () => r(e.toString()),
                                    className: "jsx-a7328a551d5cb912 " + "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ".concat(s === e.toString() ? "bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-lg shadow-accent-cyan/30" : "bg-bg-secondary text-text-secondary hover:bg-bg-tertiary hover:text-accent-cyan"),
                                    children: [e, "d"]
                                }, e))
                            })]
                        }), (0, a.jsx)("div", {
                            className: "jsx-a7328a551d5cb912 rounded-xl bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 p-3 border border-accent-purple/20",
                            children: (0, a.jsxs)("div", {
                                className: "jsx-a7328a551d5cb912 flex items-center justify-between",
                                children: [(0, a.jsx)("span", {
                                    className: "jsx-a7328a551d5cb912 text-xs text-text-muted font-medium",
                                    children: "Daily Rate"
                                }), (0, a.jsxs)("div", {
                                    className: "jsx-a7328a551d5cb912 text-right",
                                    children: [(0, a.jsxs)("div", {
                                        className: "jsx-a7328a551d5cb912 text-2xl font-black gradient-text",
                                        children: [n, "%"]
                                    }), (0, a.jsx)("div", {
                                        className: "jsx-a7328a551d5cb912 text-[10px] text-text-muted",
                                        children: "547.5% APR"
                                    })]
                                })]
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "jsx-a7328a551d5cb912 space-y-3 mb-4",
                        children: [(0, a.jsxs)("div", {
                            className: "jsx-a7328a551d5cb912 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-500/20 p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300",
                            children: [(0, a.jsx)("div", {
                                className: "jsx-a7328a551d5cb912 absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-500"
                            }), (0, a.jsxs)("div", {
                                className: "jsx-a7328a551d5cb912 relative",
                                children: [(0, a.jsxs)("div", {
                                    className: "jsx-a7328a551d5cb912 flex items-center gap-2 mb-4",
                                    children: [(0, a.jsx)("div", {
                                        className: "jsx-a7328a551d5cb912 w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center",
                                        children: (0, a.jsx)("svg", {
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            className: "jsx-a7328a551d5cb912 w-6 h-6 text-blue-400",
                                            children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                                                className: "jsx-a7328a551d5cb912"
                                            })
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "jsx-a7328a551d5cb912 font-bold text-lg text-text-primary",
                                        children: "Without Reinvesting"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "jsx-a7328a551d5cb912 space-y-3",
                                    children: [(0, a.jsxs)("div", {
                                        className: "jsx-a7328a551d5cb912 flex justify-between items-center",
                                        children: [(0, a.jsx)("span", {
                                            className: "jsx-a7328a551d5cb912 text-text-muted text-sm",
                                            children: "Interest Earned"
                                        }), (0, a.jsxs)("span", {
                                            className: "jsx-a7328a551d5cb912 font-mono font-bold text-xl text-blue-400",
                                            children: ["$", f(i)]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "jsx-a7328a551d5cb912 flex justify-between items-center",
                                        children: [(0, a.jsx)("span", {
                                            className: "jsx-a7328a551d5cb912 text-text-muted text-sm",
                                            children: "Total Amount"
                                        }), (0, a.jsxs)("span", {
                                            className: "jsx-a7328a551d5cb912 font-mono font-black text-2xl text-text-primary",
                                            children: ["$", f(x)]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "jsx-a7328a551d5cb912 pt-2 border-t border-blue-500/20",
                                        children: (0, a.jsxs)("div", {
                                            className: "jsx-a7328a551d5cb912 flex justify-between items-center",
                                            children: [(0, a.jsx)("span", {
                                                className: "jsx-a7328a551d5cb912 text-text-muted text-sm",
                                                children: "ROI"
                                            }), (0, a.jsxs)("span", {
                                                className: "jsx-a7328a551d5cb912 font-bold text-lg text-blue-400",
                                                children: [e && parseFloat(e) > 0 ? (i / parseFloat(e) * 100).toFixed(2) : "0.00", "%"]
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "jsx-a7328a551d5cb912 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-600/10 border-2 border-success/30 p-6 hover:shadow-2xl hover:shadow-success/20 transition-all duration-300 hover:scale-[1.02]",
                            children: [(0, a.jsx)("div", {
                                className: "jsx-a7328a551d5cb912 absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full filter blur-3xl group-hover:scale-150 transition-transform duration-500"
                            }), (0, a.jsx)("div", {
                                className: "jsx-a7328a551d5cb912 absolute top-4 right-4",
                                children: (0, a.jsx)("span", {
                                    className: "jsx-a7328a551d5cb912 px-3 py-1.5 bg-success/20 text-success text-xs font-black rounded-full animate-pulse",
                                    children: "BEST VALUE"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "jsx-a7328a551d5cb912 relative",
                                children: [(0, a.jsxs)("div", {
                                    className: "jsx-a7328a551d5cb912 flex items-center gap-2 mb-4",
                                    children: [(0, a.jsx)("div", {
                                        className: "jsx-a7328a551d5cb912 w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center",
                                        children: (0, a.jsx)("svg", {
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            className: "jsx-a7328a551d5cb912 w-6 h-6 text-success",
                                            children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                                                className: "jsx-a7328a551d5cb912"
                                            })
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "jsx-a7328a551d5cb912 font-bold text-lg text-text-primary",
                                        children: "With Manual Compounding"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "jsx-a7328a551d5cb912 space-y-3",
                                    children: [(0, a.jsxs)("div", {
                                        className: "jsx-a7328a551d5cb912 flex justify-between items-center",
                                        children: [(0, a.jsx)("span", {
                                            className: "jsx-a7328a551d5cb912 text-text-muted text-sm",
                                            children: "Interest Earned"
                                        }), (0, a.jsxs)("span", {
                                            className: "jsx-a7328a551d5cb912 font-mono font-bold text-xl text-success",
                                            children: ["$", f(o)]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "jsx-a7328a551d5cb912 flex justify-between items-center",
                                        children: [(0, a.jsx)("span", {
                                            className: "jsx-a7328a551d5cb912 text-text-muted text-sm",
                                            children: "Total Amount"
                                        }), (0, a.jsxs)("span", {
                                            className: "jsx-a7328a551d5cb912 font-mono font-black text-3xl gradient-text",
                                            children: ["$", f(h)]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "jsx-a7328a551d5cb912 pt-2 border-t border-success/20",
                                        children: (0, a.jsxs)("div", {
                                            className: "jsx-a7328a551d5cb912 flex justify-between items-center",
                                            children: [(0, a.jsx)("span", {
                                                className: "jsx-a7328a551d5cb912 text-text-muted text-sm",
                                                children: "ROI"
                                            }), (0, a.jsxs)("span", {
                                                className: "jsx-a7328a551d5cb912 font-bold text-xl text-success",
                                                children: [e && parseFloat(e) > 0 ? (o / parseFloat(e) * 100).toFixed(2) : "0.00", "%"]
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "jsx-a7328a551d5cb912 relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-purple bg-[length:200%_100%] animate-gradient p-[2px]",
                            children: (0, a.jsx)("div", {
                                className: "jsx-a7328a551d5cb912 relative bg-bg-primary rounded-2xl p-6",
                                children: (0, a.jsxs)("div", {
                                    className: "jsx-a7328a551d5cb912 flex items-center justify-between",
                                    children: [(0, a.jsxs)("div", {
                                        className: "jsx-a7328a551d5cb912 flex items-center gap-3",
                                        children: [(0, a.jsx)("div", {
                                            className: "jsx-a7328a551d5cb912 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow",
                                            children: (0, a.jsx)("svg", {
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2.5,
                                                className: "jsx-a7328a551d5cb912 w-7 h-7 text-white",
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M13 10V3L4 14h7v7l9-11h-7z",
                                                    className: "jsx-a7328a551d5cb912"
                                                })
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "jsx-a7328a551d5cb912",
                                            children: [(0, a.jsx)("div", {
                                                className: "jsx-a7328a551d5cb912 font-black text-lg gradient-text",
                                                children: "Compounding Advantage"
                                            }), (0, a.jsx)("div", {
                                                className: "jsx-a7328a551d5cb912 text-xs text-text-muted",
                                                children: "Extra profit from reinvesting"
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "jsx-a7328a551d5cb912 text-right",
                                        children: [(0, a.jsxs)("div", {
                                            className: "jsx-a7328a551d5cb912 font-mono font-black text-3xl gradient-text",
                                            children: ["+$", f(p)]
                                        }), (0, a.jsx)("div", {
                                            className: "jsx-a7328a551d5cb912 text-sm font-bold text-success",
                                            children: e && parseFloat(e) > 0 && p > 0 ? "+".concat((p / parseFloat(e) * 100).toFixed(2), "% extra") : ""
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "jsx-a7328a551d5cb912 p-5 rounded-2xl bg-gradient-subtle border border-accent-purple/10",
                        children: (0, a.jsxs)("div", {
                            className: "jsx-a7328a551d5cb912 flex gap-3",
                            children: [(0, a.jsx)("div", {
                                className: "jsx-a7328a551d5cb912 w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center flex-shrink-0",
                                children: (0, a.jsx)("svg", {
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    className: "jsx-a7328a551d5cb912 w-5 h-5 text-accent-purple",
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                        className: "jsx-a7328a551d5cb912"
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "jsx-a7328a551d5cb912 text-sm text-text-secondary space-y-2",
                                children: [(0, a.jsx)("p", {
                                    className: "jsx-a7328a551d5cb912 text-text-primary font-semibold",
                                    children: "\uD83D\uDCA1 Pro Tip:"
                                }), (0, a.jsx)("p", {
                                    className: "jsx-a7328a551d5cb912",
                                    children: "Manual compounding means claiming your rewards and manually depositing them back into the contract. Each reinvestment increases your stake, earning you interest on your interest for exponential growth!"
                                })]
                            })]
                        })
                    }), (0, a.jsx)(w(), {
                        id: "a7328a551d5cb912",
                        children: ".slider-purple.jsx-a7328a551d5cb912::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;width:20px;height:20px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-linear-gradient(315deg,#7b61ff,#00e5ff);background:-moz-linear-gradient(315deg,#7b61ff,#00e5ff);background:-o-linear-gradient(315deg,#7b61ff,#00e5ff);background:linear-gradient(135deg,#7b61ff,#00e5ff);cursor:pointer;-webkit-box-shadow:0 0 10px rgba(123,97,255,.5);-moz-box-shadow:0 0 10px rgba(123,97,255,.5);box-shadow:0 0 10px rgba(123,97,255,.5);-webkit-transition:-webkit-transform.2s;-moz-transition:-moz-transform.2s;-o-transition:-o-transform.2s;transition:-webkit-transform.2s;transition:-moz-transform.2s;transition:-o-transform.2s;transition:transform.2s}.slider-purple.jsx-a7328a551d5cb912::-webkit-slider-thumb:hover{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}.slider-cyan.jsx-a7328a551d5cb912::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;width:20px;height:20px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-linear-gradient(315deg,#00e5ff,#7b61ff);background:-moz-linear-gradient(315deg,#00e5ff,#7b61ff);background:-o-linear-gradient(315deg,#00e5ff,#7b61ff);background:linear-gradient(135deg,#00e5ff,#7b61ff);cursor:pointer;-webkit-box-shadow:0 0 10px rgba(0,229,255,.5);-moz-box-shadow:0 0 10px rgba(0,229,255,.5);box-shadow:0 0 10px rgba(0,229,255,.5);-webkit-transition:-webkit-transform.2s;-moz-transition:-moz-transform.2s;-o-transition:-o-transform.2s;transition:-webkit-transform.2s;transition:-moz-transform.2s;transition:-o-transform.2s;transition:transform.2s}.slider-cyan.jsx-a7328a551d5cb912::-webkit-slider-thumb:hover{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}@-webkit-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes gradient{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.animate-gradient.jsx-a7328a551d5cb912{-webkit-animation:gradient 3s ease infinite;-moz-animation:gradient 3s ease infinite;-o-animation:gradient 3s ease infinite;animation:gradient 3s ease infinite}"
                    })]
                })
            }
            class C extends c.Component {
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0,
                        error: e
                    }
                }
                componentDidCatch(e, t) {
                    console.error("ErrorBoundary caught:", e, t)
                }
                render() {
                    return this.state.hasError ? this.props.fallback ? this.props.fallback : (0, a.jsxs)("div", {
                        className: "glass-card p-6 text-center",
                        children: [(0, a.jsx)("div", {
                            className: "w-12 h-12 bg-error-bg rounded-xl flex items-center justify-center mx-auto mb-4",
                            children: (0, a.jsx)("svg", {
                                className: "w-6 h-6 text-error",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                })
                            })
                        }), (0, a.jsx)("p", {
                            className: "text-sm font-medium text-text-primary mb-1",
                            children: "Something went wrong"
                        }), (0, a.jsx)("p", {
                            className: "text-xs text-text-muted mb-4",
                            children: "Please refresh the page or try again later."
                        }), (0, a.jsx)("button", {
                            onClick: () => {
                                this.setState({
                                    hasError: !1,
                                    error: null
                                }), window.location.reload()
                            },
                            className: "btn-primary px-6 py-2 rounded-xl text-sm font-medium",
                            children: "Refresh"
                        })]
                    }) : this.props.children
                }
                constructor(e) {
                    super(e), this.state = {
                        hasError: !1,
                        error: null
                    }
                }
            }

            function S() {
                var e;
                let {
                    isConnected: t,
                    isCorrectChain: s
                } = (0, x.O)(), {
                    contractStats: n,
                    userInfo: c
                } = (0, m.n)(), o = e => {
                    if (!e) return "0";
                    let t = parseFloat((0, r.dF)(e));
                    return t >= 1e6 ? "".concat((t / 1e6).toFixed(2), "M") : t >= 1e3 ? "".concat((t / 1e3).toFixed(2), "K") : t.toFixed(2)
                };
                return (0, a.jsxs)("main", {
                    className: "min-h-screen bg-bg-secondary relative",
                    children: [(0, a.jsx)("div", {
                        className: "animated-bg"
                    }), (0, a.jsx)("div", {
                        className: "grid-bg fixed inset-0 pointer-events-none"
                    }), (0, a.jsxs)("div", {
                        className: "relative z-10",
                        children: [(0, a.jsx)(l.Z, {}), (0, a.jsx)("section", {
                            className: "relative pt-8 sm:pt-16 md:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 md:px-6 overflow-hidden",
                            children: (0, a.jsxs)("div", {
                                className: "max-w-7xl mx-auto",
                                children: [(0, a.jsxs)("div", {
                                    className: "text-center mb-6 sm:mb-8 animate-fade-in",
                                    children: [(0, a.jsxs)("h1", {
                                        className: "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 sm:mb-6 tracking-tight leading-tight",
                                        children: ["Earn ", (0, a.jsx)("span", {
                                            className: "gradient-text-animated",
                                            children: "Cash Bond"
                                        }), (0, a.jsx)("br", {}), "on Your USDT"]
                                    }), (0, a.jsxs)("p", {
                                        className: "text-base sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-2",
                                        children: ["Zero fees on deposits & withdrawals. Fully liquid — no lock period.", (0, a.jsx)("br", {}), (0, a.jsx)("span", {
                                            className: "text-accent-purple font-semibold",
                                            children: "1.5% daily yield"
                                        }), " on BSC. Open-source & immutable."]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-12 animate-fade-in stagger-1 px-2",
                                    children: [(0, a.jsxs)("div", {
                                        className: "trust-badge",
                                        children: [(0, a.jsx)("span", {
                                            className: "icon",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                                })
                                            })
                                        }), "Open Source"]
                                    }), (0, a.jsxs)("div", {
                                        className: "trust-badge",
                                        children: [(0, a.jsx)("span", {
                                            className: "icon",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                })
                                            })
                                        }), "Crowd Funded"]
                                    }), (0, a.jsxs)("div", {
                                        className: "trust-badge",
                                        children: [(0, a.jsx)("span", {
                                            className: "icon",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                })
                                            })
                                        }), "Community Driven"]
                                    }), (0, a.jsxs)("a", {
                                        href: "https://solidityscan.com/quickscan/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061/bscscan/mainnet",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "trust-badge hover:bg-success-bg transition-colors",
                                        children: [(0, a.jsx)("span", {
                                            className: "icon",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-4 h-4 text-success",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                })
                                            })
                                        }), "Solidity Scan Audited ✓"]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col items-center mb-6 sm:mb-10 animate-fade-in stagger-2 px-2",
                                    children: [(0, a.jsxs)("div", {
                                        className: "apy-box px-4 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-center animate-pulse-glow mb-4 sm:mb-6 w-full max-w-lg md:max-w-2xl",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-accent-purple text-xs sm:text-sm font-semibold mb-2 tracking-wider uppercase",
                                            children: "Total Value Locked"
                                        }), (0, a.jsxs)("p", {
                                            className: "stat-value-lg tracking-tight text-3xl sm:text-5xl md:text-6xl",
                                            children: ["$", o(null == n ? void 0 : n.contractBalance)]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3",
                                            children: [(0, a.jsx)("span", {
                                                className: "status-dot-animated",
                                                style: {
                                                    background: "var(--success)"
                                                }
                                            }), (0, a.jsx)("span", {
                                                className: "text-text-secondary font-medium text-sm sm:text-base",
                                                children: "USDT in Contract"
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2",
                                        children: [(0, a.jsx)("a", {
                                            href: "#staking",
                                            className: "inline-flex items-center justify-center gap-2 sm:gap-2.5 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-purple-700 text-white animate-pulse-glow w-full sm:w-auto",
                                            onClick: e => {
                                                var t;
                                                e.preventDefault(), null === (t = document.querySelector("#staking")) || void 0 === t || t.scrollIntoView({
                                                    behavior: "smooth"
                                                })
                                            },
                                            children: "\uD83D\uDCB0 Earn 1.5% Daily - Stake Now!"
                                        }), (0, a.jsx)("a", {
                                            href: "#roi-calculator",
                                            className: "inline-flex items-center justify-center gap-2 sm:gap-2.5 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 font-bold rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 bg-white border-2 border-accent-purple/30 text-accent-purple hover:bg-accent-purple/5 w-full sm:w-auto",
                                            onClick: e => {
                                                var t;
                                                e.preventDefault(), null === (t = document.querySelector("#roi-calculator")) || void 0 === t || t.scrollIntoView({
                                                    behavior: "smooth"
                                                })
                                            },
                                            children: "\uD83D\uDCCA Calculate Your Returns"
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-4 sm:mb-6 animate-fade-in stagger-3 px-2",
                                    children: [(0, a.jsxs)("div", {
                                        className: "glass-card p-3 sm:p-4 md:p-5 text-center",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-text-muted text-xs sm:text-sm font-medium uppercase tracking-wider mb-2",
                                            children: "APR"
                                        }), (0, a.jsx)("p", {
                                            className: "text-2xl sm:text-3xl font-bold gradient-text",
                                            children: "547.5%"
                                        }), (0, a.jsx)("p", {
                                            className: "text-text-muted text-xs mt-1.5",
                                            children: "1.5% daily"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "glass-card p-4 sm:p-5 text-center",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-text-muted text-xs sm:text-sm font-medium uppercase tracking-wider mb-2",
                                            children: "Users"
                                        }), (0, a.jsx)("p", {
                                            className: "text-2xl sm:text-3xl font-bold text-text-primary",
                                            children: (null == n ? void 0 : null === (e = n.totalUsersCount) || void 0 === e ? void 0 : e.toString()) || "0"
                                        }), (0, a.jsx)("p", {
                                            className: "text-text-muted text-xs mt-1.5",
                                            children: "active stakers"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "glass-card p-4 sm:p-5 text-center",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-text-muted text-xs sm:text-sm font-medium uppercase tracking-wider mb-2",
                                            children: "Days Active"
                                        }), (0, a.jsx)("p", {
                                            className: "text-2xl sm:text-3xl font-bold text-text-primary",
                                            children: (null == n ? void 0 : n.deployedAt) ? Math.floor((Date.now() / 1e3 - Number(n.deployedAt)) / 86400).toString() : "0"
                                        }), (0, a.jsx)("p", {
                                            className: "text-text-muted text-xs mt-1.5",
                                            children: "since launch"
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto mb-6 sm:mb-10 animate-fade-in stagger-4 px-2",
                                    children: [(0, a.jsxs)("div", {
                                        className: "glass-card p-3 sm:p-4 text-center border-l-2 sm:border-l-4 border-success",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-text-muted text-xs font-medium uppercase tracking-wider mb-1.5",
                                            children: "Total Staked"
                                        }), (0, a.jsxs)("p", {
                                            className: "text-lg sm:text-xl font-bold text-success",
                                            children: ["$", o(null == n ? void 0 : n.totalStaked)]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "glass-card p-3 sm:p-4 text-center border-l-2 sm:border-l-4 border-accent-purple",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-text-muted text-xs font-medium uppercase tracking-wider mb-1.5",
                                            children: "Ref Rewards Paid"
                                        }), (0, a.jsxs)("p", {
                                            className: "text-lg sm:text-xl font-bold text-accent-purple",
                                            children: ["$", o(null == n ? void 0 : n.totalReferralRewards)]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in stagger-4",
                                    children: [(0, a.jsxs)("a", {
                                        href: "/whitepaper.html",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn-primary inline-flex items-center gap-2.5 text-base",
                                        children: [(0, a.jsx)("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            })
                                        }), "Read Technical Whitepaper"]
                                    }), (0, a.jsxs)("a", {
                                        href: "https://t.me/CashBondOfficial",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn-gradient-outline inline-flex items-center gap-2.5 text-base",
                                        children: [(0, a.jsx)("svg", {
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: (0, a.jsx)("path", {
                                                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.234.17.331.015.098.034.322.019.496z"
                                            })
                                        }), "Join Community"]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            id: "staking",
                            className: "py-8 sm:py-12 px-4 sm:px-6",
                            children: (0, a.jsx)("div", {
                                className: "max-w-7xl mx-auto",
                                children: (0, a.jsxs)("div", {
                                    className: "grid lg:grid-cols-3 gap-6 lg:gap-8 items-start",
                                    children: [(0, a.jsx)("div", {
                                        className: "lg:col-span-2 order-1",
                                        children: (0, a.jsx)(C, {
                                            children: (0, a.jsx)(v, {})
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "space-y-6 order-2",
                                        children: [(0, a.jsx)(C, {
                                            children: (0, a.jsx)(N, {})
                                        }), t && s && c && (0, a.jsxs)("div", {
                                            className: "glass-card p-5 sm:p-6 animate-fade-in",
                                            children: [(0, a.jsx)("h3", {
                                                className: "text-lg font-semibold text-text-primary mb-4",
                                                children: "Your Stats"
                                            }), (0, a.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "flex items-center justify-between p-3 bg-bg-secondary rounded-xl",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-sm text-text-muted",
                                                        children: "Your Stake"
                                                    }), (0, a.jsxs)("span", {
                                                        className: "text-base font-semibold text-text-primary",
                                                        children: ["$", o(null == c ? void 0 : c.stakedAmount)]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex items-center justify-between p-3 bg-success-bg rounded-xl",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-sm text-text-muted",
                                                        children: "Pending Rewards"
                                                    }), (0, a.jsxs)("span", {
                                                        className: "text-base font-semibold text-success",
                                                        children: ["$", o(null == c ? void 0 : c.pendingRewards)]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex items-center justify-between p-3 bg-[rgba(123,97,255,0.1)] rounded-xl",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "text-sm text-text-muted",
                                                        children: "Referral Earnings"
                                                    }), (0, a.jsxs)("span", {
                                                        className: "text-base font-semibold text-accent-purple",
                                                        children: ["$", o(null == c ? void 0 : c.referralEarnings)]
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), (0, a.jsx)("section", {
                            className: "py-16 sm:py-24 px-4 sm:px-6",
                            children: (0, a.jsxs)("div", {
                                className: "max-w-7xl mx-auto",
                                children: [(0, a.jsxs)("div", {
                                    className: "text-center mb-12",
                                    children: [(0, a.jsx)("h2", {
                                        className: "text-3xl sm:text-4xl font-bold text-text-primary mb-4",
                                        children: "How It Works"
                                    }), (0, a.jsx)("p", {
                                        className: "text-text-secondary max-w-xl mx-auto",
                                        children: "Start earning in three simple steps"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "grid sm:grid-cols-3 gap-6 sm:gap-8",
                                    children: [(0, a.jsxs)("div", {
                                        className: "glass-card p-8 text-center hover-float",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow",
                                            children: (0, a.jsx)("span", {
                                                className: "text-white text-2xl font-bold",
                                                children: "1"
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "font-semibold text-text-primary text-xl mb-3",
                                            children: "Connect & Deposit"
                                        }), (0, a.jsxs)("p", {
                                            className: "text-text-secondary",
                                            children: ["Connect your wallet and deposit USDT. ", (0, a.jsx)("strong", {
                                                className: "text-text-primary",
                                                children: "Zero deposit fees"
                                            }), " — 100% of your capital goes to work."]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "glass-card p-8 text-center hover-float",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow",
                                            children: (0, a.jsx)("span", {
                                                className: "text-white text-2xl font-bold",
                                                children: "2"
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "font-semibold text-text-primary text-xl mb-3",
                                            children: "Earn 1.5% Daily"
                                        }), (0, a.jsx)("p", {
                                            className: "text-text-secondary",
                                            children: "Rewards accumulate every second. Claim anytime — no lock period."
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "glass-card p-8 text-center hover-float",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-success",
                                            children: (0, a.jsx)("span", {
                                                className: "text-success text-2xl font-bold",
                                                children: "3"
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "font-semibold text-text-primary text-xl mb-3",
                                            children: "Withdraw Anytime"
                                        }), (0, a.jsxs)("p", {
                                            className: "text-text-secondary",
                                            children: [(0, a.jsx)("strong", {
                                                className: "text-text-primary",
                                                children: "Fully liquid capital"
                                            }), " — no lock period, no withdrawal fees, no limits. Your funds, your control."]
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            id: "roi-calculator",
                            className: "py-16 sm:py-24 px-4 sm:px-6 bg-bg-primary",
                            children: (0, a.jsx)("div", {
                                className: "max-w-4xl mx-auto",
                                children: (0, a.jsx)(C, {
                                    children: (0, a.jsx)(k, {})
                                })
                            })
                        }), (0, a.jsx)("section", {
                            className: "py-16 sm:py-24 px-4 sm:px-6",
                            children: (0, a.jsxs)("div", {
                                className: "max-w-7xl mx-auto",
                                children: [(0, a.jsxs)("div", {
                                    className: "text-center mb-12",
                                    children: [(0, a.jsx)("h2", {
                                        className: "text-3xl sm:text-4xl font-bold text-text-primary mb-4",
                                        children: "Why Choose Us"
                                    }), (0, a.jsx)("p", {
                                        className: "text-text-secondary max-w-xl mx-auto",
                                        children: "Built for security, transparency, and maximum returns"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                                    children: [(0, a.jsxs)("div", {
                                        className: "glass-card p-6 hover-float border border-success/20",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-12 h-12 bg-success-bg rounded-xl flex items-center justify-center mb-4",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-6 h-6 text-success",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                })
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "font-semibold text-text-primary mb-2",
                                            children: "Zero Fees In/Out"
                                        }), (0, a.jsx)("p", {
                                            className: "text-text-muted text-sm",
                                            children: "No deposit or withdrawal fees — 100% of your capital"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "glass-card p-6 hover-float",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-12 h-12 bg-success-bg rounded-xl flex items-center justify-center mb-4",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-6 h-6 text-success",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                })
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "font-semibold text-text-primary mb-2",
                                            children: "Immutable"
                                        }), (0, a.jsx)("p", {
                                            className: "text-text-muted text-sm",
                                            children: "Ownership renounced, code is law"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "glass-card p-6 hover-float",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-12 h-12 bg-[rgba(123,97,255,0.1)] rounded-xl flex items-center justify-center mb-4",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-6 h-6 text-accent-purple",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                                })
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "font-semibold text-text-primary mb-2",
                                            children: "Direct Referrals"
                                        }), (0, a.jsx)("p", {
                                            className: "text-text-muted text-sm",
                                            children: "Earn up to 15% on direct refs"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "glass-card p-6 hover-float border border-accent-cyan/20",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-12 h-12 bg-[rgba(0,212,255,0.1)] rounded-xl flex items-center justify-center mb-4",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-6 h-6 text-accent-cyan",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                })
                                            })
                                        }), (0, a.jsx)("h3", {
                                            className: "font-semibold text-text-primary mb-2",
                                            children: "Fully Liquid"
                                        }), (0, a.jsx)("p", {
                                            className: "text-text-muted text-sm",
                                            children: "No lock period — withdraw anytime, no limits"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            className: "py-8 px-4 sm:px-6",
                            children: (0, a.jsx)("div", {
                                className: "max-w-4xl mx-auto",
                                children: (0, a.jsx)("div", {
                                    className: "glass-card p-6",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex items-start gap-4",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-10 h-10 bg-accent-purple/10 rounded-xl flex items-center justify-center flex-shrink-0",
                                            children: (0, a.jsx)("span", {
                                                className: "text-lg",
                                                children: "\uD83D\uDCA1"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, a.jsx)("h3", {
                                                className: "font-semibold text-text-primary mb-1",
                                                children: "Community-Funded Pool"
                                            }), (0, a.jsx)("p", {
                                                className: "text-sm text-text-secondary mb-3",
                                                children: "Payouts come from new deposits. The deployer private key is publicly shared for ultimate transparency."
                                            }), (0, a.jsxs)("a", {
                                                href: "/docs#faq",
                                                className: "inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:underline",
                                                children: ["Learn how it works", (0, a.jsx)("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: (0, a.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M9 5l7 7-7 7"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        }), (0, a.jsx)("footer", {
                            className: "py-12 px-4 sm:px-6 border-t border-black/5 bg-bg-primary",
                            children: (0, a.jsxs)("div", {
                                className: "max-w-7xl mx-auto",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [(0, a.jsx)("img", {
                                            src: "logo.png",
                                            alt: "CashBond",
                                            width: 36,
                                            height: 36,
                                            className: "rounded-lg"
                                        }), (0, a.jsxs)("span", {
                                            className: "text-lg font-bold text-text-primary tracking-tight",
                                            children: ["Cash", (0, a.jsx)("span", {
                                                className: "text-accent-purple",
                                                children: "Bond"
                                            })]
                                        })]
                                    }), (0, a.jsxs)("nav", {
                                        className: "flex flex-wrap items-center gap-x-6 gap-y-3",
                                        children: [(0, a.jsx)("a", {
                                            href: "/",
                                            className: "text-sm text-text-secondary hover:text-accent-purple transition-colors",
                                            children: "Dashboard"
                                        }), (0, a.jsx)("a", {
                                            href: "/docs.html",
                                            className: "text-sm text-text-secondary hover:text-accent-purple transition-colors",
                                            children: "Docs"
                                        }), (0, a.jsx)("a", {
                                            href: "/trust.html",
                                            className: "text-sm text-text-secondary hover:text-accent-purple transition-colors",
                                            children: "Trust"
                                        }), (0, a.jsx)("a", {
                                            href: "/network.html",
                                            className: "text-sm text-text-secondary hover:text-accent-purple transition-colors",
                                            children: "Network"
                                        }), (0, a.jsxs)("a", {
                                            href: "https://bscscan.com/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm text-text-secondary hover:text-accent-purple transition-colors flex items-center gap-1",
                                            children: ["Contract", (0, a.jsx)("svg", {
                                                className: "w-3 h-3",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                })
                                            })]
                                        }), (0, a.jsxs)("a", {
                                            href: "https://solidityscan.com/quickscan/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061/bscscan/mainnet",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm text-success hover:text-success/80 transition-colors flex items-center gap-1 font-medium",
                                            children: ["Audit ✓", (0, a.jsx)("svg", {
                                                className: "w-3 h-3",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, a.jsx)("a", {
                                            href: "https://t.me/CashBondOfficial",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "p-3 bg-bg-secondary rounded-xl hover:bg-bg-tertiary transition-colors text-text-secondary hover:text-accent-purple",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-5 h-5",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: (0, a.jsx)("path", {
                                                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.234.17.331.015.098.034.322.019.496z"
                                                })
                                            })
                                        }), (0, a.jsx)("a", {
                                            href: "https://bscscan.com/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "p-3 bg-bg-secondary rounded-xl hover:bg-bg-tertiary transition-colors text-text-secondary hover:text-accent-purple",
                                            children: (0, a.jsx)("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2,
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3",
                                    children: [(0, a.jsx)("p", {
                                        className: "text-text-muted text-sm",
                                        children: "\xa9 2026 CashBond. All rights reserved."
                                    }), (0, a.jsx)("p", {
                                        className: "text-text-muted text-xs",
                                        children: "Open-source DeFi protocol on BNB Smart Chain"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        89840: function(e, t, s) {
            var a = s(62601);
            s(90472);
            var r = s(2265),
                n = r && "object" == typeof r && "default" in r ? r : {
                    default: r
                };

            function i(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            var l = void 0 !== a && a.env && !0,
                c = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                o = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            s = t.name,
                            a = void 0 === s ? "stylesheet" : s,
                            r = t.optimizeForSpeed,
                            n = void 0 === r ? l : r;
                        d(c(a), "`name` must be a string"), this._name = a, this._deletedRulePlaceholder = "#" + a + "-deleted-rule____{}", d("boolean" == typeof n, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = n, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var i = document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = i ? i.getAttribute("content") : null
                    }
                    var t, s = e.prototype;
                    return s.setOptimizeForSpeed = function(e) {
                        d("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), d(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                    }, s.isOptimizeForSpeed = function() {
                        return this._optimizeForSpeed
                    }, s.inject = function() {
                        var e = this;
                        if (d(!this._injected, "sheet already injected"), this._injected = !0, this._optimizeForSpeed) {
                            this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (l || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                            return
                        }
                        this._serverSheet = {
                            cssRules: [],
                            insertRule: function(t, s) {
                                return "number" == typeof s ? e._serverSheet.cssRules[s] = {
                                    cssText: t
                                } : e._serverSheet.cssRules.push({
                                    cssText: t
                                }), s
                            },
                            deleteRule: function(t) {
                                e._serverSheet.cssRules[t] = null
                            }
                        }
                    }, s.getSheetForTag = function(e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                            if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                    }, s.getSheet = function() {
                        return this.getSheetForTag(this._tags[this._tags.length - 1])
                    }, s.insertRule = function(e, t) {
                        if (d(c(e), "`insertRule` accepts only strings"), this._optimizeForSpeed) {
                            var s = this.getSheet();
                            "number" != typeof t && (t = s.cssRules.length);
                            try {
                                s.insertRule(e, t)
                            } catch (t) {
                                return l || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                            }
                        } else {
                            var a = this._tags[t];
                            this._tags.push(this.makeStyleTag(this._name, e, a))
                        }
                        return this._rulesCount++
                    }, s.replaceRule = function(e, t) {
                        if (this._optimizeForSpeed) {
                            var s = this.getSheet();
                            if (t.trim() || (t = this._deletedRulePlaceholder), !s.cssRules[e]) return e;
                            s.deleteRule(e);
                            try {
                                s.insertRule(t, e)
                            } catch (a) {
                                l || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), s.insertRule(this._deletedRulePlaceholder, e)
                            }
                        } else {
                            var a = this._tags[e];
                            d(a, "old rule at index `" + e + "` not found"), a.textContent = t
                        }
                        return e
                    }, s.deleteRule = function(e) {
                        if (this._optimizeForSpeed) this.replaceRule(e, "");
                        else {
                            var t = this._tags[e];
                            d(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                        }
                    }, s.flush = function() {
                        this._injected = !1, this._rulesCount = 0, this._tags.forEach(function(e) {
                            return e && e.parentNode.removeChild(e)
                        }), this._tags = []
                    }, s.cssRules = function() {
                        var e = this;
                        return this._tags.reduce(function(t, s) {
                            return s ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules, function(t) {
                                return t.cssText === e._deletedRulePlaceholder ? null : t
                            })) : t.push(null), t
                        }, [])
                    }, s.makeStyleTag = function(e, t, s) {
                        t && d(c(t), "makeStyleTag accepts only strings as second parameter");
                        var a = document.createElement("style");
                        this._nonce && a.setAttribute("nonce", this._nonce), a.type = "text/css", a.setAttribute("data-" + e, ""), t && a.appendChild(document.createTextNode(t));
                        var r = document.head || document.getElementsByTagName("head")[0];
                        return s ? r.insertBefore(a, s) : r.appendChild(a), a
                    }, i(e.prototype, [{
                        key: "length",
                        get: function() {
                            return this._rulesCount
                        }
                    }]), t && i(e, t), e
                }();

            function d(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var x = function(e) {
                    for (var t = 5381, s = e.length; s;) t = 33 * t ^ e.charCodeAt(--s);
                    return t >>> 0
                },
                m = {};

            function h(e, t) {
                if (!t) return "jsx-" + e;
                var s = String(t),
                    a = e + s;
                return m[a] || (m[a] = "jsx-" + x(e + "-" + s)), m[a]
            }

            function u(e, t) {
                var s = e + t;
                return m[s] || (m[s] = t.replace(/__jsx-style-dynamic-selector/g, e)), m[s]
            }
            var p = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            s = t.styleSheet,
                            a = void 0 === s ? null : s,
                            r = t.optimizeForSpeed,
                            n = void 0 !== r && r;
                        this._sheet = a || new o({
                            name: "styled-jsx",
                            optimizeForSpeed: n
                        }), this._sheet.inject(), a && "boolean" == typeof n && (this._sheet.setOptimizeForSpeed(n), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var s = this.getIdAndRules(e),
                            a = s.styleId,
                            r = s.rules;
                        if (a in this._instancesCounts) {
                            this._instancesCounts[a] += 1;
                            return
                        }
                        var n = r.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[a] = n, this._instancesCounts[a] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            s = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(s in this._instancesCounts, "styleId: `" + s + "` not found"), this._instancesCounts[s] -= 1, this._instancesCounts[s] < 1) {
                            var a = this._fromServer && this._fromServer[s];
                            a ? (a.parentNode.removeChild(a), delete this._fromServer[s]) : (this._indices[s].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[s]), delete this._instancesCounts[s]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            s = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return s[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, s;
                        return t = this.cssRules(), void 0 === (s = e) && (s = {}), t.map(function(e) {
                            var t = e[0],
                                a = e[1];
                            return n.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: s.nonce ? s.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: a
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            s = e.dynamic,
                            a = e.id;
                        if (s) {
                            var r = h(a, s);
                            return {
                                styleId: r,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return u(r, e)
                                }) : [u(r, t)]
                            }
                        }
                        return {
                            styleId: h(a),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                j = r.createContext(null);
            j.displayName = "StyleSheetContext";
            var b = n.default.useInsertionEffect || n.default.useLayoutEffect,
                f = new p;

            function g(e) {
                var t = f || r.useContext(j);
                return t && b(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)]), null
            }
            g.dynamic = function(e) {
                return e.map(function(e) {
                    return h(e[0], e[1])
                }).join(" ")
            }, t.style = g
        },
        69102: function(e, t, s) {
            e.exports = s(89840).style
        },
        90472: function() {}
    },
    function(e) {
        e.O(0, [9472, 5250, 1180, 8360, 5461, 8009, 2971, 4938, 1744], function() {
            return e(e.s = 79880)
        }), _N_E = e.O()
    }
]);