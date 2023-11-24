document.addEventListener('DOMContentLoaded', function () {
    const generateForm = document.querySelector('.generate-form');
    const imageGallery = document.querySelector('.img-gallery');


    // Ai intergration DALLE_2
    const API = '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';

    const updateImageCard = (imageDataArray) => {
        imageDataArray.forEach((imgObject, index) => {
            const imgCard = imageGallery.querySelectorAll(".img-card")[index];
            const imgElement = imgCard.querySelector("img");
            const downloasButton = imgCard.querySelector(".but");

            const genAiImage = `data:image/jpeg;base64,${imgObject.b64_json}`;
            imgElement.src = genAiImage;

            imgElement.onload = () => {
                imgCard.classList.remove("loading");
                downloasButton.setAttribute("href", genAiImage)
                downloasButton.setAttribute("download", `${new Date().getTime}.jpg`)
            }

        });
    }


    const AiImage = async (userPromt, imageQuantity) => {
        try {
            const response = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API}`
                },
                body: JSON.stringify({
                    prompt: userPromt,
                    n: parseInt(imageQuantity),
                    size: "1024x1024",
                    style: "natural",

                    response_format: "b64_json",
                })
            });

            if (!response.ok) throw new Error("failed to generate an images! please contact ajmal@ajmalmaker.com ");

            const responseData = await response.json();
            console.log(responseData); // Log the response data to check its structure

            const { data } = responseData;

            updateImageCard([...data]);
        } catch (error) {
            alert(error.message);
        }
    };





    const handleFormSubmission = (e) => {
        e.preventDefault();

        const userPromt = e.srcElement[0].value;
        const imageQuantity = e.srcElement[1].value;
        // Your form submission logic here

        const imagesCardMarkup = Array.from({ length: imageQuantity }, () =>
            `<div class="img-card loading">
            <img src="assets/loader.svg" alt="">
            <button class=" but "><i class="fa-solid fa-arrow-down fa-1x"></i></button>
        </div>`).join('');

        imageGallery.innerHTML = imagesCardMarkup;
        AiImage(userPromt, imageQuantity);
    };

    generateForm.addEventListener("submit", handleFormSubmission);
})