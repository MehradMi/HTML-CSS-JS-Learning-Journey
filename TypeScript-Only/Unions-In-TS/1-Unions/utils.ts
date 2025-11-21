
export function getTicketInfo(id: string | number) {
    if (typeof id === "string") {
        let numId = "";
        for (const char of id){
            if (parseInt(char)) {
                numId += char;
            }
        }
        id = parseInt(numId);
    } 

    return `Processing ticket: ${id}`;
}