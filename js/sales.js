const sales=['500,000','750,000','600,000','800,000','900,000','700,000','650,000','1,200,000']
const units=['25,000 Smart Hydration Bottles','35,000 Collapsible and Portable Insulating Bottles','30,000 reusable bottles','40,000 Thermal Flasks and 30,000 Collapsible Insulating Bottles','38,000 Thermal Flasks and 22,000 Collapsible Insulating Bottles','28,000 Smart Hydration Bottles','26,000 Smart Hydration Bottles','50,000 Thermal flasks, 30,000 Smart Hydration Bottles, and 25,000 Collapsible Insulating Bottles']
const desc=['During the new year ,Aqualife partnered with popular fitness centers like Anytime Fitness and Fitness First to start the New Years Resolution Campaign. The campaign included in-gym promotions and wellness app advertisements. Health experts endorsed Aqualife products, emphasizing the importance of hydration in achieving fitness goals.'
    ,'High-profile fitness influencers like Kayla Itsines and Joe Wicks shared their personal stories on social media, showcasing Aqualife bottles during workouts. This partnership boosted credibility and visibility among fitness enthusiasts , helping to generate more sales. It also greatly increased the amount of follower gaained on our social media pages , leading to a greater reach of audience'
    ,'Aqualife participated in this Ecosperity week 2024 held from April 15-17 at Marina Bay Sands, Singapore. The event focused on innovative solutions for decarbonization and nature conservation, which aligned well with Aqualife\'s eco-friendly product. Aqualife also participated in GenZero Climate Summit 2024: Held on April 16, this summit gathered global leaders to discuss pathways towards decarbonization. Aqualife\'s presence at this event helped them connect with environmentally conscious consumers and businesses'
    ,'Aqualife partnered with Outdoor aventure groups/organizations like REI and National Geographic Adventure. The promotions highlighted the durability and convenience of thermal flasks and collapsible insulating bottles for summer activities. Influencers in the adventure and travel space shared their experiences using these products during their trips, driving sales.'
    ,' Aqualife managed to clinch sponsorship from major marathons like the New York City Marathon and partnerships with hiking groups increased the demand for durable hydration solutions. Aqualife\'s thermal flasks and collapsible bottles were promoted for their practicality and reliability in rigorous outdoor activities, leading to a sharp increase in media attention due to the publicity provided by these major marathons'
    ,' Aqualife collaborated with educational institutions like Harvard and MIT emphasized the importance of hydration for students, implementing the Back-To-School campaign. Promotions included special offers and visibility through school newsletters and social media channels, helping students stay hydrated during their busy school days.'
    ,' Aqualife organized and sponsored fitness events with spooky themes and promoted a challenged called the Halloween-Themed Fitness Challenge on social media which garnered a large amount of attention in the gym community. Partnerships with popular gyms and fitness apps created unique experiences, encouraging participants to stay hydrated with smart hydration bottles during Halloween-themed runs and workouts.'
    ,' During the bustling month of November , Aqualife capitalized on days like Black Friday and 11/11 to push out great discounted deals . Extensive online promotions and early bird deals created a buzz. The campaign featured significant discounts on all products, and collaborations with e-commerce platforms like Amazon and eBay further boosted visibility. Early bird specials and limited-time offers drove high sales volumes.'
]
const month=['January','March','April','June','August','September','October','November']
let currentIndex = 0; 


function displaySalesData(index) {
    const currentMonth = month[index];
    const currentYear = new Date().getFullYear();
    
    document.getElementById('date').innerText = `${currentMonth} ${currentYear}`;
    document.getElementById('monthlysales').innerText = `Monthly Sales: $${sales[index]}`;
    document.getElementById('sales').innerText = `Units Sold: ${units[index]}`;
    document.getElementById('desc').innerText = desc[index];
}


function updateDisplay() {
    displaySalesData(currentIndex);
}


document.getElementById('prevButton').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; 
        updateDisplay();
    } else {
        alert("This is the first month."); 
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentIndex < month.length - 1) {
        currentIndex++;
        updateDisplay();
    } else {
        alert("This is the last month."); 
    }
});


updateDisplay();