"use client"

import { useState, useEffect } from "react"
import { Wrench } from "lucide-react"
import './under.css'
import logo from '../../assets/logo.png'
import comp from '../../assets/compimg.png'

export default function MaintenancePage() {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        const progressTimer = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5))
        }, 100)

        return () => {
            clearInterval(timer)
            clearInterval(progressTimer)
        }
    }, [])


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute top-40 right-32 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-float-delayed"></div>

                {/* Geometric Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full">
                    <div className="absolute top-0 right-0 w-full h-3/4 bg-gradient-to-bl from-green-500/30 via-emerald-400/20 to-transparent transform rotate-12 animate-slide-in-right"></div>
                    <div className="absolute top-20 right-10 w-3/4 h-2/3 bg-gradient-to-bl from-green-400/20 via-emerald-500/15 to-transparent transform -rotate-6 animate-slide-in-right-delayed"></div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                {/* Animated Lines */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-line-sweep"></div>
                <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-line-sweep-delayed"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
                        {/* Logo */}
                        <div className="flex justify-center lg:justify-start mb-8">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
                                <div className="relative bg-white p-4 rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                        {/* <span className="text-white text-2xl font-bold">f</span> */}
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                                <Wrench className="w-8 h-8 text-green-400 animate-spin-slow" />
                                <span className="text-green-400 font-semibold text-lg tracking-wide">UNDER MAINTENANCE</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent animate-gradient-x">
                                    FixMyDB
                                </span>
                            </h1>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 leading-relaxed">
                                Unlock the Power of Your Data with
                                <span className="text-green-400"> Trusted Database Experts</span>
                            </h2>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <span>Upgrade Progress</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-300 ease-out relative"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6 animate-fade-in-up-delayed">
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <div className="text-center py-6 border-y border-white/10">
                                <div className="text-3xl font-mono text-green-400 mb-2">{currentTime.toLocaleTimeString()}</div>
                                <div className="text-gray-400">
                                    {currentTime.toLocaleDateString("en-US", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>
                            </div>
                        </div>

                        <img src={comp} alt="" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-gray-500 text-sm">
                    © 2025 FixMyDB. Thank you for your patience during this maintenance window.
                </p>
            </div>
        </div>
    )
}
