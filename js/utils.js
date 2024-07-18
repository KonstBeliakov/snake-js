export function generate_random(items){
    let weight_sum = 0;
    let borders = [];

    for(let item of items) {
        weight_sum += item[1];
        borders.push(weight_sum);
    }

    let random_number = Math.random() * weight_sum;
    for(let i = 0; i < borders.length; i++) {
        if(random_number < borders[i])
            return items[i][0];
    }

}