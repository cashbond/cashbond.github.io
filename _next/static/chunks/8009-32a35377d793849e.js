"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8009], {
        91232: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(57437),
                a = n(2265),
                i = n(61396),
                o = n.n(i),
                s = n(16691),
                c = n.n(s),
                l = n(14701);
            let u = {
                contract: "https://bscscan.com/address/0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061",
                telegram: "https://t.me/CashBondOfficial",
                docs: "/docs.html",
                network: "/network.html",
                trust: "/trust.html"
            };

            function d() {
                let [e, t] = (0, a.useState)(!1);
                return (0, r.jsxs)("header", {
                    className: "sticky top-0 z-50 w-full bg-bg-primary/80 backdrop-blur-xl border-b border-black/5",
                    children: [(0, r.jsx)("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: (0, r.jsxs)("div", {
                            className: "flex items-center justify-between h-16 sm:h-20",
                            children: [(0, r.jsxs)("a", {
                                href: "/",
                                className: "flex items-center gap-2.5 group",
                                children: [(0, r.jsx)("img", {
                                    src: "/logo.png",
                                    alt: "Cashbond",
                                    width: 36,
                                    height: 36,
                                    className: "rounded-lg"
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
                                    href: u.docs,
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    children: "Docs"
                                }), (0, r.jsx)(o(), {
                                    href: u.trust,
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    children: "Trust"
                                }), (0, r.jsx)(o(), {
                                    href: u.network,
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    children: "Network"
                                }), (0, r.jsx)("a", {
                                    href: "/#roi-calculator",
                                    className: "px-4 py-2 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                    onClick: e => {
                                        var t;
                                        e.preventDefault(), null === (t = document.querySelector("#roi-calculator")) || void 0 === t || t.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    },
                                    children: "Calculator"
                                }), (0, r.jsxs)("a", {
                                    href: u.contract,
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
                                    href: u.telegram,
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
                                    onClick: () => t(!e),
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
                                }), (0, r.jsx)(l.NL, {
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
                                onClick: () => t(!1),
                                children: "Dashboard"
                            }), (0, r.jsx)(o(), {
                                href: u.docs,
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => t(!1),
                                children: "Documentation"
                            }), (0, r.jsx)(o(), {
                                href: u.trust,
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => t(!1),
                                children: "Trust & Security"
                            }), (0, r.jsx)(o(), {
                                href: u.network,
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => t(!1),
                                children: "Network Stats"
                            }), (0, r.jsx)("a", {
                                href: "/#roi-calculator",
                                className: "block px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: e => {
                                    var n;
                                    e.preventDefault(), t(!1), null === (n = document.querySelector("#roi-calculator")) || void 0 === n || n.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                },
                                children: "Calculator"
                            }), (0, r.jsxs)("a", {
                                href: u.contract,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-between px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => t(!1),
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
                                href: u.telegram,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-between px-4 py-3 text-text-secondary hover:text-accent-purple text-sm font-medium transition-colors rounded-lg hover:bg-accent-purple/5",
                                onClick: () => t(!1),
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
        },
        72886: function(e, t, n) {
            function r(e, t) {
                try {
                    window.umami && window.umami.track(e, t)
                } catch (e) {}
            }

            function a(e, t) {
                r("deposit", {
                    amount: parseFloat(e),
                    has_referrer: t ? 1 : 0
                })
            }

            function i(e) {
                r("withdraw", {
                    amount: parseFloat(e)
                })
            }

            function o(e) {
                r("claim", {
                    rewards: parseFloat(e)
                })
            }

            function s(e) {
                r("referral_visit", {
                    referrer: "".concat(e.slice(0, 6), "...").concat(e.slice(-4))
                })
            }

            function c() {
                r("referral_copy")
            }
            n.d(t, {
                Cs: function() {
                    return c
                },
                Hd: function() {
                    return i
                },
                aQ: function() {
                    return o
                },
                i2: function() {
                    return a
                },
                v4: function() {
                    return s
                }
            })
        },
        6771: function(e, t, n) {
            n.d(t, {
                Hx: function() {
                    return c
                },
                RB: function() {
                    return d
                },
                Vw: function() {
                    return r
                },
                dj: function() {
                    return i
                },
                dm: function() {
                    return l
                },
                iu: function() {
                    return a
                },
                qp: function() {
                    return u
                },
                sJ: function() {
                    return s
                },
                zr: function() {
                    return o
                }
            });
            let r = "0x597Ecc15e2120ea8E351a9D4ed62cA022cd28061",
                a = "0x55d398326f99059fF775485246999027B3197955",
                i = 56,
                o = "0x38",
                s = ["https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.defibit.io/", "https://bsc-dataseed1.ninicoin.io/", "https://bsc-dataseed2.defibit.io/", "https://bsc-dataseed3.defibit.io/", "https://bsc-dataseed4.defibit.io/", "https://bsc-dataseed2.ninicoin.io/", "https://bsc-dataseed3.ninicoin.io/", "https://bsc-dataseed4.ninicoin.io/", "https://bsc.publicnode.com", "https://binance.llamarpc.com"],
                c = {
                    chainId: o,
                    chainName: "BNB Smart Chain",
                    nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18
                    },
                    rpcUrls: s,
                    blockExplorerUrls: ["https://bscscan.com/"]
                },
                l = [{
                    name: "Starter",
                    directs: 0,
                    rate: 5,
                    rateBps: 500,
                    color: "text-text-muted"
                }, {
                    name: "Bronze",
                    directs: 3,
                    rate: 8,
                    rateBps: 800,
                    color: "text-amber-600"
                }, {
                    name: "Silver",
                    directs: 5,
                    rate: 10,
                    rateBps: 1e3,
                    color: "text-gray-400"
                }, {
                    name: "Gold",
                    directs: 10,
                    rate: 12,
                    rateBps: 1200,
                    color: "text-yellow-500"
                }, {
                    name: "Diamond",
                    directs: 25,
                    rate: 15,
                    rateBps: 1500,
                    color: "text-cyan-400"
                }],
                u = ["function deposit(uint256 amount, address referrer) external", "function withdraw(uint256 amount) external", "function claimRewards() external", "function pendingReward(address userAddress) view returns (uint256)", "function pendingReferralReward(address userAddress) view returns (uint256)", "function getUserInfo(address userAddress) view returns (uint256 stakedAmount, uint256 stakingRewards, uint256 referralRewardsUnclaimed, address referrer, uint256 referralEarningsTotal, uint256 referralCount)", "function getContractStats() view returns (uint256 _totalStaked, uint256 _totalReferralRewards, uint256 _totalUsersCount, uint256 contractBalance, uint256 _deployedAt)", "function getReferralTierStatus(address userAddress) view returns (uint256 activeDirects, uint256 currentTier, uint256 currentRate, uint256 totalDirects, uint256 selfStake, uint256 nextTierDirectsNeeded)", "function getReferralRate(uint256 activeDirects) pure returns (uint256)", "function owner() view returns (address)", "function getTrustInfo() pure returns (string, string, string, string)", "function getUserReferrals(address userAddress) view returns (address[])", "function getUserReferralsPaginated(address userAddress, uint256 offset, uint256 limit) view returns (address[] result, uint256 total)", "function users(address) view returns (uint256 stakedAmount, uint256 lastClaimTime, uint256 pendingRewards, uint256 pendingReferralRewards, uint256 referralEarnings, address referrer, bool isRegistered)", "function ACTIVE_DIRECT_MIN_STAKE() view returns (uint256)", "function MIN_SELF_STAKE_FOR_REF() view returns (uint256)", "function REF_RATE_STARTER() view returns (uint256)", "function REF_RATE_BRONZE() view returns (uint256)", "function REF_RATE_SILVER() view returns (uint256)", "function REF_RATE_GOLD() view returns (uint256)", "function REF_RATE_DIAMOND() view returns (uint256)", "function TIER_BRONZE_DIRECTS() view returns (uint256)", "function TIER_SILVER_DIRECTS() view returns (uint256)", "function TIER_GOLD_DIRECTS() view returns (uint256)", "function TIER_DIAMOND_DIRECTS() view returns (uint256)", "function DAILY_RATE() view returns (uint256)", "function totalStaked() view returns (uint256)", "function deployedAt() view returns (uint256)"],
                d = ["function approve(address spender, uint256 amount) returns (bool)", "function allowance(address owner, address spender) view returns (uint256)", "function balanceOf(address account) view returns (uint256)", "function decimals() view returns (uint8)"]
        },
        53731: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return w
                }
            });
            var r = n(2265),
                a = n(87253),
                i = n(57415),
                o = n(3605),
                s = n(40210),
                c = n(90642),
                l = n(6771),
                u = n(5925);
            let d = {
                isRateLimited: !1,
                backoffUntil: 0,
                consecutiveErrors: 0,
                currentRpcIndex: 0
            };

            function f(e) {
                var t, n, r;
                let a = (null == e ? void 0 : null === (t = e.message) || void 0 === t ? void 0 : t.toLowerCase()) || "",
                    i = (null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : null === (n = r.message) || void 0 === n ? void 0 : n.toLowerCase()) || "";
                return a.includes("limit") || a.includes("too many") || a.includes("rate") || i.includes("limit") || i.includes("too many")
            }

            function m() {
                d.consecutiveErrors++;
                let e = Math.min(3e4, 5e3 * Math.pow(2, d.consecutiveErrors - 1));
                d.backoffUntil = Date.now() + e, d.isRateLimited = !0, console.warn("⚠️ Rate limit hit. Backing off for ".concat(e / 1e3, "s. Rotating RPC endpoint.")), d.currentRpcIndex = (d.currentRpcIndex + 1) % l.sJ.length, setTimeout(() => {
                    d.isRateLimited = !1, console.log("✅ Rate limit backoff completed, resuming requests")
                }, e)
            }

            function p() {
                Date.now() > d.backoffUntil && (d.consecutiveErrors = 0)
            }

            function h() {
                return d.isRateLimited && Date.now() < d.backoffUntil
            }

            function w() {
                let {
                    signer: e,
                    provider: t,
                    address: n,
                    isConnected: w,
                    isCorrectChain: g
                } = (0, c.O)(), [v, x] = (0, r.useState)(null), [C, k] = (0, r.useState)(null), [b, y] = (0, r.useState)(null), [R, I] = (0, r.useState)([]), [S, B] = (0, r.useState)(null), [N, E] = (0, r.useState)(BigInt(0)), [j, T] = (0, r.useState)(BigInt(0)), [_, D] = (0, r.useState)(!1), [A, M] = (0, r.useState)(!1), L = (0, r.useMemo)(() => {
                    try {
                        let e = l.sJ[d.currentRpcIndex];
                        return new a.r6(e, 56, {
                            staticNetwork: !0
                        })
                    } catch (e) {
                        return null
                    }
                }, [d.currentRpcIndex]), U = (0, r.useRef)({
                    userData: 0,
                    contractStats: 0,
                    tierStatus: 0,
                    referralEstimate: 0
                }), q = t || L, F = (0, r.useCallback)(() => e ? {
                    staking: new i.CH(l.Vw, l.qp, e),
                    usdt: new i.CH(l.iu, l.RB, e)
                } : {
                    staking: null,
                    usdt: null
                }, [e]), P = (0, r.useCallback)(async () => {
                    if (!n || !g || h()) return;
                    let e = Date.now();
                    if (e - U.current.userData < 5e3) return;
                    U.current.userData = e;
                    let r = t || L;
                    if (r) try {
                        let e = new i.CH(l.Vw, l.qp, r),
                            t = new i.CH(l.iu, l.RB, r),
                            [a, o, s] = await Promise.all([e.getUserInfo(n), t.balanceOf(n), t.allowance(n, l.Vw)]);
                        x({
                            stakedAmount: a[0],
                            pendingRewards: a[1],
                            pendingReferralRewards: a[2],
                            referrer: a[3],
                            referralEarnings: a[4],
                            referralCount: Number(a[5])
                        }), E(o), T(s), p()
                    } catch (e) {
                        console.error("Error fetching user data:", e), f(e) && m()
                    }
                }, [t, L, n, g]), V = (0, r.useCallback)(async () => {
                    if (!t || !n || !g || h()) return;
                    let e = Date.now();
                    if (!(e - U.current.tierStatus < 5e3)) {
                        U.current.tierStatus = e;
                        try {
                            let e = new i.CH(l.Vw, l.qp, t),
                                r = await e.getReferralTierStatus(n);
                            y({
                                activeDirects: Number(r[0]),
                                currentTier: Number(r[1]),
                                currentRate: Number(r[2]),
                                totalDirects: Number(r[3]),
                                selfStake: r[4],
                                nextTierDirectsNeeded: Number(r[5])
                            }), p()
                        } catch (e) {
                            console.error("Error fetching tier status:", e), f(e) && m()
                        }
                    }
                }, [t, n, g]), z = (0, r.useCallback)(async () => {
                    if (!(!t || !n || !g || h())) try {
                        let e = new i.CH(l.Vw, l.qp, t),
                            r = await e.getUserReferrals(n);
                        I(r), p()
                    } catch (e) {
                        console.error("Error fetching user referrals:", e), f(e) && m()
                    }
                }, [t, n, g]), H = (0, r.useCallback)(async () => {
                    let e = t || L;
                    if (!e || !n || !g || h()) return;
                    let r = Date.now();
                    if (!(r - U.current.referralEstimate < 12e4)) {
                        U.current.referralEstimate = r;
                        try {
                            let t = new i.CH(l.Vw, l.qp, e),
                                r = await t.getUserReferrals(n);
                            if (0 === r.length) {
                                B({
                                    estimatedDailyRefEarnings: BigInt(0),
                                    totalActiveReferralStakes: BigInt(0),
                                    queriedCount: 0,
                                    meetsMinStake: !1
                                });
                                return
                            }
                            let a = (await t.users(n))[0],
                                o = BigInt(1) * BigInt(1e18),
                                s = BigInt(1) * BigInt(1e18),
                                c = a >= o,
                                u = (await t.getReferralTierStatus(n))[2],
                                d = Math.min(r.length, 10),
                                m = async function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                                    for (let r = 0; r <= n; r++) try {
                                        return await new Promise(e => setTimeout(e, 300 * r)), (await t.users(e))[0]
                                    } catch (e) {
                                        if (r === n || !f(e)) break
                                    }
                                    return BigInt(0)
                                }, h = [];
                            for (let e = 0; e < d; e++) {
                                await new Promise(e => setTimeout(e, 150));
                                let t = await m(r[e]);
                                h.push(t)
                            }
                            let w = BigInt(0);
                            for (let e of h) e >= s && (w += e);
                            let g = BigInt(0);
                            c && w > BigInt(0) && (g = w * BigInt(150) / BigInt(1e4) * u / BigInt(1e4)), B({
                                estimatedDailyRefEarnings: g,
                                totalActiveReferralStakes: w,
                                queriedCount: h.length,
                                meetsMinStake: c
                            }), p()
                        } catch (e) {
                            console.warn("Referral estimate unavailable:", null == e ? void 0 : e.message), f(e) && m(), B({
                                estimatedDailyRefEarnings: BigInt(0),
                                totalActiveReferralStakes: BigInt(0),
                                queriedCount: 0,
                                meetsMinStake: !0
                            })
                        }
                    }
                }, [t, L, n, g]), O = (0, r.useCallback)(async () => {
                    if (h()) return;
                    let e = Date.now();
                    if (!(e - U.current.contractStats < 15e3)) {
                        U.current.contractStats = e;
                        try {
                            let e = await fetch("/api/stats?_t=".concat(Date.now()), {
                                cache: "no-store"
                            });
                            if (e.ok) {
                                let t = await e.json();
                                if (t.totalStaked) {
                                    k({
                                        totalStaked: (0, o.fi)(t.totalStaked),
                                        totalReferralRewards: (0, o.fi)(t.totalReferralRewards),
                                        totalUsersCount: BigInt(t.totalUsersCount),
                                        contractBalance: (0, o.fi)(t.contractBalance),
                                        deployedAt: BigInt(t.deployedAt)
                                    }), p();
                                    return
                                }
                            }
                        } catch (e) {}
                        if (q) try {
                            let e = new i.CH(l.Vw, l.qp, q),
                                t = await e.getContractStats();
                            k({
                                totalStaked: t[0],
                                totalReferralRewards: t[1],
                                totalUsersCount: t[2],
                                contractBalance: t[3],
                                deployedAt: t[4]
                            }), p()
                        } catch (e) {
                            console.error("Error fetching contract stats:", e), f(e) && m()
                        }
                    }
                }, [q]), W = async function(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BigInt(3e5);
                    try {
                        return await e[t].estimateGas(...n) * BigInt(130) / BigInt(100)
                    } catch (e) {
                        return console.warn("Gas estimation failed for ".concat(t, ", using fallback:"), e), r
                    }
                }, G = (0, r.useCallback)(async () => {
                    let {
                        usdt: e
                    } = F();
                    if (e) {
                        M(!0);
                        try {
                            let t = await W(e, "approve", [l.Vw, s.Bz], BigInt(1e5)),
                                n = await e.approve(l.Vw, s.Bz, {
                                    gasLimit: t
                                });
                            u.default.loading("Approving USDT...", {
                                id: "approve"
                            }), await n.wait(), u.default.success("USDT approved!", {
                                id: "approve"
                            }), await P()
                        } catch (e) {
                            console.error("Error approving:", e), u.default.error(e.reason || "Approval failed", {
                                id: "approve"
                            })
                        } finally {
                            M(!1)
                        }
                    }
                }, [F, P]), J = e => {
                    var t, n, r, a, i;
                    let o = (null == e ? void 0 : null === (t = e.message) || void 0 === t ? void 0 : t.toLowerCase()) || "",
                        s = (null == e ? void 0 : null === (n = e.reason) || void 0 === n ? void 0 : n.toLowerCase()) || "",
                        c = (null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (r = a.message) || void 0 === r ? void 0 : r.toLowerCase()) || "",
                        l = "".concat(o, " ").concat(s, " ").concat(c);
                    return (null == e ? void 0 : e.code) === 4001 || (null == e ? void 0 : e.code) === "ACTION_REJECTED" || l.includes("user rejected") || l.includes("user denied") ? "Transaction rejected by user" : (null == e ? void 0 : e.code) === -32603 || l.includes("insufficient funds") || l.includes("insufficient balance for gas") ? "Insufficient BNB for gas fees — you need a small amount of BNB to pay network fees" : l.includes("execution reverted") || l.includes("internal json-rpc error") ? l.includes("belowminimumdeposit") ? "Minimum deposit is $1 USDT" : l.includes("zeroamount") ? "Amount must be greater than zero" : l.includes("insufficientstake") ? "Insufficient staked balance" : l.includes("norewardstoclaim") ? "No rewards available to claim" : l.includes("transfer amount exceeds allowance") ? "USDT approval needed — please try again" : l.includes("transfer amount exceeds balance") ? "Insufficient USDT balance" : "Transaction reverted — check your balance and try again" : l.includes("nonce") || l.includes("replacement") ? "Pending transaction conflict — wait for previous tx or reset your wallet nonce" : l.includes("timeout") || l.includes("network") ? "Network timeout — check your connection and try again" : (null == e ? void 0 : e.reason) ? e.reason : (null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.message) ? e.data.message : "Transaction failed — please try again"
                }, Q = (0, r.useCallback)(async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0x0000000000000000000000000000000000000000",
                        {
                            staking: n,
                            usdt: r
                        } = F();
                    if (n && r) {
                        D(!0);
                        try {
                            let a = (0, o.fi)(e);
                            if (j < a) {
                                u.default.loading("Step 1/2: Approving USDT...", {
                                    id: "deposit",
                                    duration: 6e4
                                });
                                let e = await W(r, "approve", [l.Vw, s.Bz], BigInt(1e5)),
                                    t = await r.approve(l.Vw, s.Bz, {
                                        gasLimit: e
                                    });
                                await t.wait(), T(s.Bz), u.default.loading("Step 2/2: Confirming deposit...", {
                                    id: "deposit",
                                    duration: 6e4
                                })
                            } else u.default.loading("Confirming deposit...", {
                                id: "deposit",
                                duration: 6e4
                            });
                            let i = await W(n, "deposit", [a, t], BigInt(35e4)),
                                c = await n.deposit(a, t, {
                                    gasLimit: i
                                });
                            u.default.loading("Waiting for confirmation...", {
                                id: "deposit",
                                duration: 6e4
                            }), await c.wait(), u.default.success("✅ Successfully deposited $".concat(parseFloat(e).toFixed(2), " USDT!"), {
                                id: "deposit",
                                duration: 5e3
                            }), await Promise.all([P(), O(), V()])
                        } catch (e) {
                            console.error("Error depositing:", e), u.default.error(J(e), {
                                id: "deposit",
                                duration: 5e3
                            })
                        } finally {
                            D(!1)
                        }
                    }
                }, [F, P, O, V, j]), K = (0, r.useCallback)(async e => {
                    let {
                        staking: t
                    } = F();
                    if (t) {
                        D(!0);
                        try {
                            let n = (0, o.fi)(e);
                            u.default.loading("Confirming withdrawal...", {
                                id: "withdraw",
                                duration: 6e4
                            });
                            let r = await W(t, "withdraw", [n], BigInt(25e4)),
                                a = await t.withdraw(n, {
                                    gasLimit: r
                                });
                            u.default.loading("Waiting for confirmation...", {
                                id: "withdraw",
                                duration: 6e4
                            }), await a.wait(), u.default.success("✅ Successfully withdrew $".concat(parseFloat(e).toFixed(2), " USDT!"), {
                                id: "withdraw",
                                duration: 5e3
                            }), await Promise.all([P(), O(), V()])
                        } catch (e) {
                            console.error("Error withdrawing:", e), u.default.error(J(e), {
                                id: "withdraw",
                                duration: 5e3
                            })
                        } finally {
                            D(!1)
                        }
                    }
                }, [F, P, O, V]), Z = (0, r.useCallback)(async () => {
                    let {
                        staking: e
                    } = F();
                    if (e) {
                        D(!0);
                        try {
                            u.default.loading("Confirming claim...", {
                                id: "claim",
                                duration: 6e4
                            });
                            let t = await W(e, "claimRewards", [], BigInt(3e5)),
                                n = await e.claimRewards({
                                    gasLimit: t
                                });
                            u.default.loading("Waiting for confirmation...", {
                                id: "claim",
                                duration: 6e4
                            }), await n.wait(), u.default.success("✅ Rewards claimed successfully!", {
                                id: "claim",
                                duration: 5e3
                            }), await Promise.all([P(), O(), V()])
                        } catch (e) {
                            console.error("Error claiming:", e), u.default.error(J(e), {
                                id: "claim",
                                duration: 5e3
                            })
                        } finally {
                            D(!1)
                        }
                    }
                }, [F, P, O, V]);
                return (0, r.useEffect)(() => {
                    O();
                    let e = setInterval(O, 2e4);
                    return () => clearInterval(e)
                }, [O]), (0, r.useEffect)(() => {
                    E(BigInt(0)), T(BigInt(0)), x(null), y(null), I([]), B(null)
                }, [n]), (0, r.useEffect)(() => {
                    if (w && g && n) {
                        P(), V(), z(), H();
                        let e = setInterval(() => {
                                P(), V()
                            }, 12e3),
                            t = setInterval(H, 18e4);
                        return () => {
                            clearInterval(e), clearInterval(t)
                        }
                    }
                }, [w, g, n, P, V, z, H]), {
                    userInfo: v,
                    contractStats: C,
                    tierStatus: b,
                    userReferrals: R,
                    referralEstimate: S,
                    usdtBalance: N,
                    allowance: j,
                    isLoading: _,
                    isApproving: A,
                    approve: G,
                    deposit: Q,
                    withdraw: K,
                    claimRewards: Z,
                    needsApproval: j < (0, o.fi)("1000000"),
                    refresh: () => {
                        P(), O(), V(), z(), H()
                    }
                }
            }
        },
        90642: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return l
                }
            });
            var r = n(2265),
                a = n(46905),
                i = n(6771);
            let o = !1,
                s = 0,
                c = 0;

            function l() {
                let [e, t] = (0, r.useState)({
                    address: null,
                    isConnected: !1,
                    isConnecting: !1,
                    chainId: null,
                    isCorrectChain: !1,
                    provider: null,
                    signer: null
                }), n = (0, r.useCallback)(async () => {
                    if (window.ethereum && !o) try {
                        let e = await window.ethereum.request({
                            method: "eth_accounts"
                        });
                        if (e && e.length > 0) {
                            let e = new a.Q(window.ethereum),
                                n = await e.getSigner(),
                                r = await n.getAddress(),
                                o = await e.getNetwork(),
                                s = Number(o.chainId);
                            try {
                                localStorage.setItem("pf_wallet_connected", "true")
                            } catch (e) {}
                            t({
                                address: r,
                                isConnected: !0,
                                isConnecting: !1,
                                chainId: s,
                                isCorrectChain: s === i.dj,
                                provider: e,
                                signer: n
                            }), c = 0
                        }
                    } catch (e) {
                        (null == e ? void 0 : e.code) !== 4900 && (null == e ? void 0 : e.code) !== -32005 && console.warn("Wallet check:", (null == e ? void 0 : e.message) || e);
                        try {
                            localStorage.removeItem("pf_wallet_connected")
                        } catch (e) {}
                    }
                }, []), l = (0, r.useCallback)(async () => {
                    let e = Date.now();
                    if (o) {
                        console.log("Connection already in progress, skipping");
                        return
                    }
                    if (e - s < 1e4) {
                        let t = Math.ceil((1e4 - (e - s)) / 1e3);
                        alert("⏳ Please wait ".concat(t, " seconds before trying again"));
                        return
                    }
                    console.log("Connect button clicked");
                    let n = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    if (!window.ethereum) {
                        if (console.log("No ethereum provider found"), n) {
                            let e = window.location.href,
                                t = "https://metamask.app.link/dapp/".concat(window.location.host).concat(window.location.pathname),
                                n = "https://link.trustwallet.com/open_url?coin_id=56&url=".concat(encodeURIComponent(e));
                            confirm("\uD83D\uDCF1 Open this site in a wallet app?\n\nClick OK for MetaMask Mobile\nClick Cancel for Trust Wallet") ? window.location.href = t : window.location.href = n
                        } else alert("Please install MetaMask or another Web3 wallet. Go to metamask.io to download."), window.open("https://metamask.io/download/", "_blank");
                        return
                    }
                    console.log("Ethereum provider found:", window.ethereum), o = !0, s = e, t(e => ({
                        ...e,
                        isConnecting: !0
                    }));
                    try {
                        console.log("Requesting accounts...");
                        let e = await window.ethereum.request({
                            method: "eth_requestAccounts"
                        });
                        if (console.log("Accounts received:", e), !e || 0 === e.length) {
                            alert("No accounts found. Please unlock MetaMask."), t(e => ({
                                ...e,
                                isConnecting: !1
                            })), o = !1;
                            return
                        }
                        let n = new a.Q(window.ethereum),
                            r = await n.getSigner(),
                            s = await r.getAddress(),
                            l = await n.getNetwork(),
                            u = Number(l.chainId);
                        if (console.log("Connected to address:", s, "chainId:", u), u !== i.dj) {
                            console.log("Wrong chain, switching to BSC...");
                            try {
                                await window.ethereum.request({
                                    method: "wallet_switchEthereumChain",
                                    params: [{
                                        chainId: i.zr
                                    }]
                                });
                                let e = await n.getNetwork();
                                u = Number(e.chainId), console.log("Switched to chainId:", u)
                            } catch (e) {
                                if (console.log("Switch error:", e), 4902 === e.code) try {
                                    console.log("Adding BSC network..."), await window.ethereum.request({
                                        method: "wallet_addEthereumChain",
                                        params: [i.Hx]
                                    });
                                    let e = await n.getNetwork();
                                    u = Number(e.chainId)
                                } catch (e) {
                                    console.error("Error adding BSC network:", e)
                                }
                            }
                        }
                        let d = new a.Q(window.ethereum),
                            f = await d.getSigner(),
                            m = await d.getNetwork();
                        u = Number(m.chainId);
                        try {
                            localStorage.setItem("pf_wallet_connected", "true")
                        } catch (e) {}
                        t({
                            address: s,
                            isConnected: !0,
                            isConnecting: !1,
                            chainId: u,
                            isCorrectChain: u === i.dj,
                            provider: d,
                            signer: f
                        }), console.log("Wallet connected successfully"), c = 0, o = !1
                    } catch (a) {
                        var r;
                        console.error("Error connecting:", a), o = !1;
                        let e = (null == a ? void 0 : null === (r = a.message) || void 0 === r ? void 0 : r.toLowerCase()) || "",
                            n = null == a ? void 0 : a.code;
                        4001 === n ? (alert("Connection rejected. Please approve the connection in MetaMask."), t(e => ({
                            ...e,
                            isConnecting: !1
                        }))) : -32002 === n ? (alert("MetaMask is already processing a connection request. Please check your wallet."), t(e => ({
                            ...e,
                            isConnecting: !1
                        }))) : -32005 === n || e.includes("limit") || e.includes("too many") || e.includes("rate") ? ++c >= 3 ? (alert("⚠️ Connection failed after multiple attempts.\n\nPlease:\n1. Close and reopen MetaMask\n2. Refresh this page\n3. Try again in 1 minute"), c = 0, t(e => ({
                            ...e,
                            isConnecting: !1
                        }))) : (alert("⏳ MetaMask rate limit hit. Auto-retrying in ".concat(15, " seconds... (Attempt ").concat(c, "/").concat(3, ")")), t(e => ({
                            ...e,
                            isConnecting: !1
                        })), setTimeout(() => {
                            console.log("Auto-retry ".concat(c, "/").concat(3, "...")), l()
                        }, 15e3)) : (alert("Error connecting wallet: " + (a.message || "Unknown error")), t(e => ({
                            ...e,
                            isConnecting: !1
                        })))
                    }
                }, []), u = (0, r.useCallback)(() => {
                    try {
                        localStorage.removeItem("pf_wallet_connected")
                    } catch (e) {}
                    t({
                        address: null,
                        isConnected: !1,
                        isConnecting: !1,
                        chainId: null,
                        isCorrectChain: !1,
                        provider: null,
                        signer: null
                    })
                }, []), d = (0, r.useCallback)(async () => {
                    if (window.ethereum) try {
                        await window.ethereum.request({
                            method: "wallet_switchEthereumChain",
                            params: [{
                                chainId: i.zr
                            }]
                        })
                    } catch (e) {
                        if (4902 === e.code) try {
                            await window.ethereum.request({
                                method: "wallet_addEthereumChain",
                                params: [i.Hx]
                            })
                        } catch (e) {
                            console.error("Error adding BSC network:", e)
                        }
                    }
                }, []);
                return (0, r.useEffect)(() => {
                    let e, t;
                    let r = setTimeout(() => {
                            n()
                        }, 2e3),
                        a = () => {
                            clearTimeout(e), e = setTimeout(n, 2e3)
                        },
                        i = () => {
                            clearTimeout(t), t = setTimeout(n, 2e3)
                        };
                    return window.ethereum ? (window.ethereum.on("accountsChanged", a), window.ethereum.on("chainChanged", i), () => {
                        var n, o;
                        clearTimeout(r), clearTimeout(e), clearTimeout(t), null === (n = window.ethereum) || void 0 === n || n.removeListener("accountsChanged", a), null === (o = window.ethereum) || void 0 === o || o.removeListener("chainChanged", i)
                    }) : () => clearTimeout(r)
                }, [n]), {
                    ...e,
                    connect: l,
                    disconnect: u,
                    switchToBSC: d
                }
            }
        }
    }
]);