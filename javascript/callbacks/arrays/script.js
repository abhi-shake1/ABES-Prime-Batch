const data = [
    {
        name: "gaurav",
        city: "gzb",
        email: "raam@gmail.com"
    },
    {
        name: "mohit",
        city: "mumbai",
        email: "raamuu@gmail.com"
    },
    {
        name: "raghav",
        city: "delhi",
        email: "kaamuu@gmail.com"
    },
];

const datas = document.getElementById("add");

const addData = () => {
    data.forEach((ele) => {
        const newcard = document.createElement('div');
        newcard.className = "card";
        newcard.innerHTML = `
            <h2>${ele.name}</h2>
            <p>City: ${ele.city}</p>
            <p>Email: ${ele.email}</p>
        `;
        datas.appendChild(newcard);
    });
};
document.getElementById("addButton").addEventListener("click", addData);