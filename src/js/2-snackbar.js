import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import crossIcon from "../img/cross.png";
import tickIcon from "../img/tick.png";
import closeIcon from "../img/close.png";

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            state === "fulfilled" ? resolve(delay) : reject(delay);
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.show({
                title: "OK",
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
                backgroundColor: "#59a10d",
                titleColor: "#ffffff",
                messageColor: "#ffffff",
                iconUrl: tickIcon,
                timeout: 5000,
                close: false,
                buttons: [
                    [
                        `<button class="toast-close-btn">
                <img src="${closeIcon}" style="width: 12px; height: 12px;">
            </button>`,
                        function (instance, toast) {
                            instance.hide({ transitionOut: "fadeOut" }, toast);
                        },
                    ],
                ],
            });
        })
        .catch((delay) => {
            iziToast.show({
                title: "Error",
                message: `Rejected promise in ${delay}ms`,
                position: "topRight",
                backgroundColor: "#ef4040",
                titleColor: "#ffffff",
                messageColor: "#ffffff",
                iconUrl: crossIcon,
                timeout: 5000,
                close: false,
                buttons: [
                    [
                        `<button class="toast-close-btn">
                <img src="${closeIcon}" style="width: 12px; height: 12px;">
            </button>`,
                        function (instance, toast) {
                            instance.hide({ transitionOut: "fadeOut" }, toast);
                        },
                    ],
                ],
            });
        });

    form.reset();
});
