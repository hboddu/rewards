function getTotalMonthlyPoints (txnList)  {
    let txnPointsArray = [];
    let totalMonthlyRewardPoints = 0;
    txnList.forEach((txn) => {
        let txnPoints = 0;
        if (txn.amount > 50 && txn.amount < 100) { // receives 1 point for every dollar spent between $50 and $100
            txnPoints = txn.amount - 50;
        } else if (txn.amount > 100) {
            // 2 points for every dollar spent over $100 plus 1 point for every dollar spent between $50 and $100
            txnPoints = 2 * (txn.amount - 100) + 50;
        }
        txnPointsArray.push(txnPoints);
    })
    function sumRewardPoints(total, value) {
        return total + value;
    }
    totalMonthlyRewardPoints = txnPointsArray.reduce(sumRewardPoints); // add all reward points in the points in the points array
    return totalMonthlyRewardPoints;
}

module.exports = getTotalMonthlyPoints;