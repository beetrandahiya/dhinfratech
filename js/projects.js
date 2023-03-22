/* PROJECTS */

var projects = [
    {
        img: "./images/omaxe_logo.png",
        title: "Omaxe Celestia Premier Phase-3B",
        client: "Omaxe New Chandigarh Extension",
        desc : "is a residential project by Omaxe Group. It is located in Sector 115, Mohali. The project offers 40 3BHK deluxe flats with luxury amenities for the comfort of residents.",
        cost : "Estimated Cost: ₹170,00,000",
        time : "March 2021 - On Going",
        location : "Chandigarh"
    },
    {
        img: "./images/royal_green_logo.jpg",
        title: "Royal Green Homes",
        client: "for Royal Green Realty",
        desc : "is a residential project for all new Royal Green Homes. It is located in Bahadurgarh. The project offers ____ Deluxe Villas with world class facilities for the premium experience.",
        cost : "Estimated Cost: ₹250,00,000",
        time : "March 2023 - On Going",
        location : "Bahadurgarh, Haryana"
    },
    {
        img: "./images/omaxe_logo.png",
        title: "Vasudev Print Pack",
        client: "Vasudev Print Pack Pvt. Ltd.",
        desc : "is a large scale facility for cutting edge printing and packaging solutions. Multi-storey Office and Factory Building for Vasudev PrintPack with 1,00,000+ sq. ft. carpet area",
        cost : "Estimated Cost: ₹250,00,000",
        time : "January 2022 - February 2023",
        location : "Dera Bassi, Punjab"
    },
    {
        img: "./images/omaxe_logo.png",
        title: "Axenic Print Pack",
        client: "Axenic Print Pack Pvt. Ltd.",
        desc : "is a Print Pack Plant located in Pinjore, Haryana.",
        cost : "Estimated Cost: ₹35,00,000",
        time : "March 2021 - October 2021",
        location : "Pinjore, Haryana"
    },
    {
        img: "./images/omaxe_logo.png",
        title: "Sun Industries",
        client: "Sun Industries Pvt. Ltd.",
        desc : "Elegant Modern Architecture Interior Design and construction delivered before the promised time.        ",
        cost : "Estimated Cost: ₹45,00,000",
        time : "April 2022 - July 2022",
        location : "Baddi, Himachal Pradesh"
    },
    {
        img: "./images/omaxe_logo.png",
        title: "Padam Print Pack",
        client: "Padam Print Pack Pvt. Ltd.",
        desc : "is an Industrial Printing and Packaging Plant located in Pinjore, Haryana. Costumised design and construction solutions for the client.",
        cost : "Estimated Cost: ₹30,00,000",
        time : "February 2021 - July 2021",
        location : "Baddi, Himachal Pradesh"
    },
    {
        img: "./images/omaxe_logo.png",
        title: "PP Labels",
        client: "PP Pvt. Ltd.",
        desc : "PROJECT DESCRIPTION",
        cost : "Estimated Cost: ₹20,00,000",
        time : "May 2021 - September 2021",
        location : "Pinjore, Haryana"
    },
    {
        img: "./images/jbj_logo.png",
        title: "Rainwater Harvesting",
        client: "JBJ Perfumes Pvt. Ltd.",
        desc : "Rainwater Harvesting System for JBJ Perfumes Pvt. Ltd. in Baddi. The system is designed to efficiently collect rainwater from the roof and store it in a tank for future use.",
        cost : "Estimated Cost: ₹15,00,000",
        time : "February 2023 - On Going",
        location : "Baddi, Himachal Pradesh"
    },
    {
        img: "./images/back_to_source_logo.jpeg",
        title: "Interior Design",
        client: "Back To Source",
        desc : "Interior Design and Construction for Back To Source with a modern, elegant design with a blend of classic european elements.",
        cost : "Estimated Cost: ₹10,00,000",
        time : "March 2021 - October 2021",
        location : "Chandigarh"
    },
    

];



// make the project tile
function makeProjectTile(project) {
    return `
        <div class="project-tile">
            <div class="project-tile-title">
                <div><img src="${project.img}" alt="${project.title}"></div>
                <div>
                    <h3>${project.title}</h3>
                    <h4>for ${project.client}</h4>
                </div>
            </div>
            <div class="project-tile-desc">
                <p>${project.desc}</p>
                <p>${project.cost}</p>
                <p><i class="ph-thin ph-clock-countdown"></i>${project.time}</p>
                <p><i class="ph-thin ph-map-pin"></i>${project.location}</p>
            </div>
        </div>
    `;
}

// make the project tiles
function makeProjectTiles() {
    return projects.map(makeProjectTile).join('');
}

// add the project tiles to the DOM
function addProjectTiles() {
    const projectTiles = document.querySelector('.projects-list');
    projectTiles.innerHTML = makeProjectTiles();
}

// add the project tiles to the DOM
addProjectTiles();

