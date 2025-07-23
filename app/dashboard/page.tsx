'use client'
import NavBar from '@/components/NavBar'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, CheckCircle, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const DashboardPage = () => {
    const { user } = useUser();

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50/50 to-indigo-50/50'>
            <NavBar />

            <main className='container mx-auto px-4 py-8'>
                {/* Animated header section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 p-8 backdrop-blur-sm"
                >
                    {/* Floating sparkles background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-yellow-400/30"
                                initial={{
                                    x: Math.random() * 100 - 50,
                                    y: Math.random() * 100 - 50,
                                    rotate: Math.random() * 360,
                                    scale: Math.random() * 0.5 + 0.5
                                }}
                                animate={{
                                    y: [0, Math.random() * 40 - 20],
                                    rotate: [0, 360],
                                    transition: {
                                        duration: Math.random() * 10 + 10,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "linear"
                                    }
                                }}
                            >
                                <Star className="h-4 w-4" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-3"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -5, 0],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }
                                }}
                            >
                                <Sparkles className="h-8 w-8 text-yellow-500" />
                            </motion.div>
                            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Welcome back, <span className="whitespace-nowrap">{user?.fullName || 'Friend'}!</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-4 text-lg text-gray-600 max-w-2xl"
                        >
                            Ready to make today amazing? Here&#39;s what&#39;s happening with your projects.
                        </motion.p>
                    </div>
                </motion.div>





            </main>
        </div>
    )
}

export default DashboardPage