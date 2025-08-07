let scores: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];

let sum: number = 0;
for (let score of scores) {
    sum += score;
}

let average: number = sum / scores.length;
average = Math.round(average * 100) / 100;

console.log("Điểm trung bình:", average);