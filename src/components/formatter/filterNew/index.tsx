import { historyDummy } from "../../dummy/historyDummy";


export function filterDataByLatestDate(date: string) {
    if (historyDummy.length === 0) {
        return [];
    }

    const sortedData = historyDummy.sort((a, b) => {
        const dateA = new Date(a.attributes.createdAt).getTime();
        const dateB = new Date(b.attributes.createdAt).getTime();
        if (dateA < dateB) {
            return 1; // Mengembalikan 1 jika tanggal a lebih baru dari tanggal b
        } else if (dateA > dateB) {
            return -1; // Mengembalikan -1 jika tanggal a lebih lama dari tanggal b
        } else {
            return 0; // Mengembalikan 0 jika tanggal a sama dengan tanggal b
        }
    });

    const latestDate = sortedData[0].attributes.createdAt;
    const filteredData = historyDummy.filter(item => item.attributes.createdAt === latestDate);

    return filteredData;
}
