export const getPaginationArray = (
    currentPage: number,
    totalPages: number
) => {
    const paginationArray = [];

    // Вспомогательная функция для добавления диапазона страниц в массив
    function addRange(start: number, end: number) {
        for (let i = start; i <= end; i++) {
            paginationArray.push(i);
        }
    }

    // Если страница не первая, добавляем первую страницу в массив
    if (currentPage > 1) {
        paginationArray.push(1);
    }

    // Если текущая страница больше чем на две страницы от начала, добавляем разделитель
    if (currentPage > 3) {
        paginationArray.push(-1);
    }

    // Добавляем диапазон страниц от (текущей страницы - 1) до (текущей страницы + 1)
    addRange(
        currentPage === 2 ? 2 : Math.max(1, currentPage - 1),
        currentPage === totalPages - 1 ? totalPages - 1 : Math.min(totalPages, currentPage + 1)
    );

    // Если текущая страница меньше чем на две страницы от конца, добавляем разделитель
    if (currentPage < totalPages - 2) {
        paginationArray.push(-1);
    }

    // Если страница не последняя, добавляем последнюю страницу в массив
    if (currentPage < totalPages) {
        paginationArray.push(totalPages);
    }

        return paginationArray;
}