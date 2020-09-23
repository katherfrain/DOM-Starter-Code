const topBanner = document.createElement('div');
topBanner.style.display = 'flex';
topBanner.style.backgroundColor = 'lightblue';
topBanner.style.alignItems = 'baseline';

const HighOnCoding = document.createElement('h1');
HighOnCoding.textContent = 'High On Coding';
HighOnCoding.style.fontFamily = 'Arial';
HighOnCoding.style.fontSize = '40px';
HighOnCoding.style.color = 'white';
HighOnCoding.style.padding = '30px';

const homeButton = document.createElement('a');
homeButton.textContent = 'Home';
homeButton.style.fontFamily = 'Arial';
homeButton.style.color = 'white';
homeButton.style.fontWeight = 'bold';

const categories = document.createElement('a');
categories.textContent = 'Categories';
categories.style.fontFamily = "Arial";
categories.style.color = 'white';
categories.style.padding = '30px';

const greyBanner = document.createElement('div');
greyBanner.style.display = 'flex';
greyBanner.style.backgroundColor = 'lightgray';
greyBanner.style.alignItems = 'right';
greyBanner.style.margin = '30px';

const greyBannerTitle = document.createElement('h2');
//I'm making this h2 because it's a slightly smaller headline 
greyBannerTitle.textContent = "Curse of the Current Reviews";
greyBannerTitle.style.fontFamily = 'Arial';
greyBannerTitle.style.padding = '20px';

const reviewText = document.createElement('p');
reviewText.textContent = "SO much stuff lol";
reviewText.style.fontFamily = "Arial";

var putItHere = document.querySelector("#container");
topBanner.appendChild(HighOnCoding);
topBanner.appendChild(homeButton);
topBanner.appendChild(categories);
putItHere.appendChild(topBanner);

greyBannerTitle.appendChild(reviewText);
greyBanner.appendChild(greyBannerTitle);
putItHere.appendChild(greyBanner);



