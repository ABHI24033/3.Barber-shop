const sendReply = async(data, phone_number_id) => {

    const config = {
        headers: {
            Authorization: Bearer ${process.env.FACEBOOK_ACCESS_TOKEN},
            "Content-Type": "application/json"
        }
    };
    const response = await axios.post(process.env.FACEBOOK_MSG_URL, data, config);
    return response;
}


await sendReply({
                                    messaging_product: "whatsapp",
                                    recipient_type: "individual",
                                    to: from,
                                    type: "template",
                                    template: {
                                        name: "book_appointment",
                                        language: {
                                            code: "en"
                                        },
                                        components: [
                                            {
                                                type: "header",
                                                parameters: [
                                                    {
                                                        type: "text",
                                                        text: "Healtether healthcare" // clientname
                                                    }
                                                ]
                                            }, {
                                                type: "body",
                                                parameters: [
                                                    {
                                                        type: "text",
                                                        text: "Healtether healthcare" // clientname
                                                    }
                                                ]
                                            }, {
                                                "type": "button",
                                                "sub_type": "flow",
                                                "index": 0
                                            }
                                        ]
                                    }
                                }
                            },8709090517)