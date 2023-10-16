export const captures = {
    data:
    {
        id: 0,
        attributes: {
            createdAt: '',
            updatedAt: '',
            publishedAt: '',
            result: '',
            capturedImage: {
                data: {
                    attributes: {
                        formats: {
                            large: {
                                url: ''
                            },
                            small: {
                                url: ''
                            },
                            medium: {
                                url: ''
                            },
                            thumbnail: {
                                url: ''
                            }
                        }
                    }
                }
            }
        }
    }
}

export interface cptrs {
    data: [
        {
            id: number,
            attributes: {
                createdAt: string,
                updatedAt: string,
                publishedAt: string,
                result: string,
                capturedImage: {
                    data: {
                        attributes: {
                            formats: {
                                large: {
                                    url: string
                                },
                                small: {
                                    url: string
                                },
                                medium: {
                                    url: string
                                },
                                thumbnail: {
                                    url: string
                                }
                            }
                        }
                    }
                }
            }
        }
    ]
}