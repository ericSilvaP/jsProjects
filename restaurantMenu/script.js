// objetos DOM
const buttons = document.querySelectorAll(".button");
const main = document.getElementsByTagName("main")[0];

// lista de objetos


// codigo
buttons.forEach(element => {
    let eleClass = element.classList;
    let type;
    if (eleClass.contains("all")) {
        type = -1;
    } else if (eleClass.contains("lunch")) {
        type = 1;
    } else if (eleClass.contains("drinks")) {
        type = 2;
    } else if (eleClass.contains("breakfast")) {
        type = 0;
    } else if (eleClass.contains("dinner")) {
        type = 3;
    }
    
    element.addEventListener("click", () => changeItems(type))
});


function changeItems(type) {
    const el = document.querySelectorAll("section");

    el.forEach((e) => {
        if (type < 0) {
            e.style.display = "flex";
        }
        else if (e.classList.contains(type)){
            e.style.display = "flex";
        } else {
            e.style.display = "none";
        }
    })
}

// 0 - café; 1 - almoço; 2 - bebida; 3 - jantar
// 0 - café; 1 - almoço; 2 - bebida; 3 - jantar

// Café
addItem("https://imgs.search.brave.com/_w3WplLodlDz5B5BDzcdC-kB0sn9t9cXUEpEDTrqV_0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbnN0/aXR1Y2lvbmFsLmlm/b29kLmNvbS5ici93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/Ny9jdWxpbmFyaWEt/YnJhc2lsZWlyYS1h/cnJvei1jYXJyZXRl/aXJvLmpwZw", "Arroz Temperado", 100, "Arroz delicioso. hmmmm", 1);
addItem("https://imgs.search.brave.com/iF4SMgJ7mOwCsSpJUReYw27wIH8MCFQ3KJoKiWa44dE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lY29t/bWVyY2UudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzE1/NjA1My04MDAtMTA4/MD92PTYzODE1MjU1/ODM1MjUwMDAwMCZ3/aWR0aD04MDAmaGVp/Z2h0PTEwODAmYXNw/ZWN0PXRydWU.jpeg", "Café Expresso", 8, "Café expresso forte, ideal para começar o dia!", 0);

// Almoço
addItem("https://imgs.search.brave.com/90kn8xwKYlmU4FWhn0-OOLt280Tq08bzzRAY0qKlVyA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MDUyMDQ0OS9wdC9m/b3RvL3NsaWNlLW9m/LWNob2NvbGF0ZS1j/YWtlLXdpdGgtZ2xh/emUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXIzNDE5Ul9o/UkFzWGpyTnVsQ1Jw/ZHFwX3o5RmJ1Tjdw/MWJ0d3ZTSnZjMGc9", "Fatia de Bolo", 20, "Bolo daora de chocolate delicia", 0);
addItem("https://imgs.search.brave.com/sbZzE6rl87PIZ00xbXVcb7fSF0xd-cKSXSkpX9FUxbk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudW5pbGV2ZXJz/b2x1dGlvbnMuY29t/L3JlY2lwZXMtdjIv/MzY3NzAuanBn", "Frango Assado", 30, "Frango assado no ponto certo, crocante por fora e suculento por dentro.", 1);

// Bebidas
addItem("https://imgs.search.brave.com/QwgOwBw5qnwfEvKjiEJV4gYxBgjq9gzPGHiv2rUzp7U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92aXRh/dC5jb20uYnIvYmt0/L2J1c2NhLWRlLWFs/aW1lbnRvcy8xMTkz/LXN1Y28tZGUtbGFy/YW5qYS1uYXR1cmFs/LXNlbS1hYyVDQyVB/N3UlQ0MlODFjYXIu/anBnP2ltcz1maXQt/aW4vNDA0eDI2MC9m/aWx0ZXJzOnF1YWxp/dHkoODApOmZvcm1h/dCh3ZWJwcCk", "Suco de Laranja", 5, "Suco de laranja natural, refrescante e delicioso.", 2);
addItem("https://imgs.search.brave.com/XVIoby1tl3ssgGsz6ib7GASd39jDttorJXFAbne2CTY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1pZ3JhbnRlc2Jl/YmlkYXMuY29tLmJy/L2ltZy9iZWJpZGEv/aW1hZ2VzL3Byb2R1/Y3RzL2Z1bGwvODcx/OTUtY2VydmVqYS1o/ZWluZWtlbi1zaG90/LWxvbmctbmVjay0y/NTBtbC4yMDIzMDQx/NDE1MzkwMS5qcGc_/cD1wcm9kdWN0X3Jl/Z3VsYXImcz1hMmQ4/N2ZiMzE2NTIxNDVi/YWJhODY2MWVjODFi/ZTgwYQ", "Cerveja Gelada", 12, "Cerveja bem gelada para os dias quentes.", 2);

// Jantar
addItem("https://imgs.search.brave.com/n69wy3mjvTrzHDek_QKS2uMvm9o2v_ehMucxa0gTS-g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC5z/dGF0aWcuY29tLmJy/L2JhbmNvZGVpbWFn/ZW5zLzVtL2xrL2sx/LzVtbGtrMTlldHBt/aXEyc3Q3dDZ0ajl3/N3kuanBn", "Bacalhau ao Forno", 50, "Bacalhau delicioso, assado com azeite e alho, perfeito para o jantar.", 3);
addItem("https://imgs.search.brave.com/LMtt0HJU5qEsnuCzdQGUT6b2CFvKUH8OQBePWlWnnfE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L2VzcGFndWV0ZS1h/LWNhcmJvbmFyYS1y/b3RhdGVkLmpwZWc", "Espaguete à Carbonara", 45, "Espaguete delicioso com molho cremoso e bacon crocante.", 3);



function addItem(photoI, nameI, priceI, descriptionI, foodTypeI) {
    // tags de um item
    const section = document.createElement("section");
    section.classList.add("item");
    section.classList.add(foodTypeI)

    const foodImg = document.createElement("div");
    foodImg.classList.add("food-img")

    const img = document.createElement("img");

    const foodText = document.createElement("div");
    foodText.classList.add("food-text");

    const foodName = document.createElement("h3");
    foodName.classList.add("food-name");

    const foodPrice = document.createElement("h3");
    foodPrice.classList.add("food-price");

    const line = document.createElement("div");
    line.classList.add("line");

    const foodDescription = document.createElement("p");
    foodDescription.classList.add("food-description");

    // atribuição de valores
    img.src = photoI;
    foodName.innerText = nameI;
    foodPrice.innerText = priceI.toFixed(2).replace(".",",");
    foodDescription.innerText = descriptionI;

    // organização de paternidade
    foodImg.appendChild(img);
    foodText.append(foodName, foodPrice, line,foodDescription);
    section.append(foodImg, foodText)
    main.appendChild(section);
}