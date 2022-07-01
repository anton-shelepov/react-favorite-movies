declare module '*.scss' {
    const content: { [key: string]: any }
    export = content
}

declare module '*.png' {
    const value: any
    export default value
}

declare module '*.svg' {
    const value: any
    export default value
}
