import { historyDummy } from "../../dummy/historyDummy";


export function filterDataByLatestDate() {
    if (historyDummy.length === 0) {
        return [];
    }

    const sortedData = historyDummy.sort((a, b) => {
        const dateA = new Date(a.attributes.createdAt).getTime();
        const dateB = new Date(b.attributes.createdAt).getTime();
        if (dateA < dateB) {
            return 1;
        } else if (dateA > dateB) {
            return -1;
        } else {
            return 0;
        }
    });

    const latestDate = sortedData[0].attributes.createdAt;
    const filteredData = historyDummy.filter(item => item.attributes.createdAt === latestDate);

    return filteredData;
}
