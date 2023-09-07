interface Message {
    code?: number;
    content: string;
    type: string;
}

class Controller {
    formattedResponse(status: boolean, message: Message, data: any) {
        switch (message.type) {
            case "success":
                message.code = 200;
                break;
            default:
                message.code = 500;
        }

        return {transaction: {status}, message, data}
    }
}

export default Controller;