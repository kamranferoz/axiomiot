var cityname = '';

// if(cityname == 'LHR')
// {
//     console.log("This is Lahore");
// }
// else if(cityname == 'ISL')
// {
//     console.log("This is Islmabad");
// }
// else if(cityname == 'KHI')
// {
//     console.log("This is Karachi");
// }

switch(cityname)
{
    default:
    console.log("City not matched!");
    break;

    case 'LHR':
    console.log("This is Lahore");
    break;

    case 'ISL':
    console.log("This is Islamabad");
    break;

    case 'KHI':
    case 'HYD':
    console.log("This is Karachi OR Hyderabad");
    break;

    case 'MUL':
    console.log("This is Multan");
    break;
    
}
