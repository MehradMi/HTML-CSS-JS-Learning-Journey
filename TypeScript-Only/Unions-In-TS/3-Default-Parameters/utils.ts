
export function estimateResponseTime(promptLength: number = 100, modelType: string = "text") {
    let calculatedTime: number = 0;
    switch(modelType) {
        case "text":
            calculatedTime = 2 + .01 * promptLength;
            break;
        case "image":
            calculatedTime = 5 + .02 * promptLength;
            break;
        case "code":
            calculatedTime = 3 + .05 * promptLength;
            break;
    };

    calculatedTime = Math.round(calculatedTime);
    return calculatedTime;
}