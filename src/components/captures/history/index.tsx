import { formatDateTime } from "../../formatter/date";

interface Props {
    data: {
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
}

const HistoryCard = (props: Props) => {
    return (
        <>
            <div className="flex flex-row font-jakartaSans mt-5 w-full text-slate-700 justify-between bg-slate-300 p-3 rounded-lg">
                <h1 className="font-semibold">Captured At : {formatDateTime(props.data.attributes.createdAt)}</h1>
                <h3 className="font-semibold">Result : {props.data.attributes.result}</h3>
            </div>
        </>
    );
}

export default HistoryCard;