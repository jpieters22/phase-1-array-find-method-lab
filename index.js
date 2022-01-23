function superbowlWin(records) {
    const found = records.find(function(year) {
        return year.result === "W";
    });
    // return !!found ? found.year : undefined ;
    if (found != undefined) {
        return found.year
    }else {
        return undefined 
    }
}
