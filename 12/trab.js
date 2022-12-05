const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = "QbJFLP3qc0HLLmWawd5eg4uQXKdqg9ehcpjXhEpb";
function fetchData() {
    try {
        fetch(baseUrl + apiKey)
            .then(response => response.json())
            .then(json => {
                displaydata(json)
            })
    } catch (error) {
        console.log(error)
    }
}

fetchData()
const title = document.querySelector("#title");
const copyright = document.querySelector("#copyright");
const mediaSection = document.querySelector("#media-section");
const information = document.querySelector("#description");
function displaydata(data) {
    title.innerHTML = data.title;
    if (data.hasOwnProperty("copyright")) {
        copyright.innerHTML = data.copyright;
    } else {
        copyright.innerHTML = ""
    }
    const imageSection = `<a id="hdimg" href="" target="-blank">
<div class="image-div">
<img id="image_of_the_day" src="" alt="image-by-nasa">
</div>
</a>`

    const videoSection = `<div class="video-div">
<iframe id="videoLink" src="" frameborder="0"></iframe></div>`
    information.innerHTML = data.explanation
}
function nasarequested() {
    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const apiKey = "QbJFLP3qc0HLLmWawd5eg4uQXKdqg9ehcpjXhEpb";
    const dateInput = document.querySelector("#datepicker");
    const title = document.querySelector("#title");
    const copyright = document.querySelector("#copyright");
    const mediaSection = document.querySelector("#media-section");
    const information = document.querySelector("#description");
    const currentDate = new Date().toISOString().slice(0, 10);
    const imageSection = `<a id="hdimg" href="" target="-blank">
<div class="image-div">
<img id="image_of_the_day" src="" alt="image-by-nasa">
</div>
</a>`
    const videoSection = `<div class="video-div"> <iframe id="videoLink" src="" frameborder="0"></iframe></div>`
    let newDate = "&date=" + dateInput.value + "&";
    function fetchData() {
        try {
            fetch(baseUrl + apiKey + newDate)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    diplaydata(json)
                })
        } catch (error) {
            console.log(error)
        }
    }
    function diplaydata(data) {
        title.innerHTML = data.title;
        if (data.hasOwnProperty("copyright")) {
            copyright.innerHTML = data.copyright;
        } else {
            copyright.innerHTML = ""
        }
        date.innerHTML = data.date;
        dateInput.max = currentDate;
        dateInput.min = "1995-06-16";
        if (data.media_type == "video") {
            mediaSection.innerHTML = videoSection;
            document.getElementById("videoLink").src = data.url;
        } else {
            mediaSection.innerHTML = imageSection;
            document.getElementById("hdimg").href = data.hdurl;
            document.getElementById("image_of_the_day").src = data.url;
        }
    }
    fetchData();
}

function addContent(fundo){
    fundo.addEventListener('click', (e) => {
        e.preventDefault();
        nasarequested().onload;
    let body = document.querySelector("body")
    body.style.backgroundImage="url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwall.alphacoders.com%2Fby_sub_category.php%3Fid%3D124022%26name%3DGal%25C3%25A1xia%2BPap%25C3%25A9is%2Bde%2BParede%26lang%3DPortuguese&psig=AOvVaw1dHLJn5gLadsbvg7r-MoDI&ust=1670259897613000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOjjopC54PsCFQAAAAAdAAAAABAE')"
    })
} 

const buttonInput = document.querySelector("#pesquisar");
buttonInput.addEventListener("click", (e) => {
    e.preventDefault();
    nasarequested().onload;
})