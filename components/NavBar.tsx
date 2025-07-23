'use client'
import { SignInButton, SignUpButton, useUser } from '@clerk/nextjs'
import { LayoutDashboard, Trello } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NavBar = () => {
    const { isSignedIn } = useUser()

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: 0.1
            }}
            className="sticky top-0 z-50 w-full"
        >
            {/* Stunning gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/70 via-blue-50/50 to-purple-50/70 backdrop-blur-xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-purple-100/30"></div>

            {/* Animated border effect */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo with floating animation */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <motion.div
                            whileHover={{
                                rotate: [0, 15, -5, 0],
                                scale: [1, 1.1, 1]
                            }}
                            animate={{
                                y: [0, -5, 0],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }
                            }}
                            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-400/30"
                        >
                            <Trello className="h-5 w-5 text-white" />
                        </motion.div>
                        <motion.span
                            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
                            whileHover={{
                                scale: 1.05,
                                backgroundImage: "linear-gradient(to right, #2563eb, #3b82f6)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Trillo
                        </motion.span>
                    </Link>

                    {/* Navigation buttons */}
                    <nav className="flex items-center space-x-3 sm:space-x-4">
                        {isSignedIn ? (
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link className='cursor-pointer' href="/dashboard">
                                    <Button className="flex items-center cursor-pointer gap-2 group relative overflow-hidden">
                                        <motion.div
                                            animate={{
                                                rotate: [0, 10, -5, 0],
                                                transition: {
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }
                                            }}
                                        >
                                            <LayoutDashboard className="h-4 w-4" />
                                        </motion.div>
                                        <span className="hidden sm:inline font-medium bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                            Dashboard
                                        </span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100"
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Button>
                                </Link>
                            </motion.div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <SignInButton mode="modal">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="ghost"
                                            className="hidden sm:inline-flex font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            Sign In
                                        </Button>
                                    </motion.div>
                                </SignInButton>

                                <SignUpButton mode="modal">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.4)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <Button className="hidden sm:inline-flex font-medium bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40">
                                            Get Started
                                            <motion.span
                                                animate={{
                                                    x: [0, 4, 0],
                                                    transition: {
                                                        duration: 1.5,
                                                        repeat: Infinity
                                                    }
                                                }}
                                                className="ml-1"
                                            >
                                                &rarr;
                                            </motion.span>
                                        </Button>
                                    </motion.div>
                                </SignUpButton>

                                {/* Mobile menu button */}
                                <motion.div
                                    className="sm:hidden"
                                    whileHover={{
                                        rotate: 90,
                                        scale: 1.1
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <SignUpButton mode="modal">
                                        <Button
                                            size="icon"
                                            className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5"
                                            >
                                                <line x1="4" x2="20" y1="12" y2="12" />
                                                <line x1="4" x2="20" y1="6" y2="6" />
                                                <line x1="4" x2="20" y1="18" y2="18" />
                                            </svg>
                                        </Button>
                                    </SignUpButton>
                                </motion.div>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </motion.header>
    )
}

export default NavBar