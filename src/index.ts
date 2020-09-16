export const base64StringToFile = (base64String: string, filename: string) => {
    let arr = base64String.split(','), mime = arr[0].match(/:(.*?);/)![1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
}

export const getResizedCanvas = (canvas: HTMLCanvasElement, newWidth: number, newHeight: number) => {
    const tmpCanvas = document.createElement("canvas")
    tmpCanvas.width = newWidth
    tmpCanvas.height = newHeight
    const ctx = tmpCanvas.getContext("2d")
    if (ctx) {
        ctx.drawImage(
            canvas,
            0,
            0,
            canvas.width,
            canvas.height,
            0,
            0,
            newWidth,
            newHeight
        )
    }
    return tmpCanvas
}