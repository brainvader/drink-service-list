"use client"

import { useServerInsertedHTML } from "next/navigation"
import { NextUIProvider, CssBaseline } from "@nextui-org/react"

export function Providers({ children }: { children: React.ReactNode }) {
    useServerInsertedHTML(() => {
        return <>{CssBaseline.flush()}</>
    })

    return <NextUIProvider>{children}</NextUIProvider>
}