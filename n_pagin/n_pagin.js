const itemsPerPage = 2; // Number of items per page
// const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`); // Sample array of items
// const items = [
//   '<img class="display_item" src="dddepth-160.jpg" alt="">',
//   '<img class="display_item" src="dddepth-161.jpg" alt="">',
//   '<img class="display_item" src="dddepth-162.jpg" alt="">',
//   '<img class="display_item" src="dddepth-184(4).jpg" alt="">',
//   '<img class="display_item" src="dddepth-163.jpg" alt="">',
//   '<img class="display_item" src="dddepth-164.jpg" alt="">',
//   '<img class="display_item" src="dddepth-167.jpg" alt="">',
//   '<img class="display_item" src="dddepth-167(1).jpg" alt="">',
//   '<img class="display_item" src="dddepth-184(1).jpg" alt="">',
//   '<img class="display_item" src="dddepth-170.jpg" alt="">',
//   '<img class="display_item" src="dddepth-172.jpg" alt="">',
//   '<img class="display_item" src="dddepth-174.jpg" alt="">',
//   '<img class="display_item" src="dddepth-180.jpg" alt="">',
//   '<img class="display_item" src="dddepth-182.jpg" alt="">',
//   '<img class="display_item" src="dddepth-184(3).jpg" alt="">',
//   '<img class="display_item" src="dddepth-183.jpg" alt="">',
//   '<img class="display_item" src="dddepth-184.jpg" alt="">',
//   '<img class="display_item" src="dddepth-164.jpg" alt="">',
//   '<img class="display_item" src="dddepth-184(2).jpg" alt="">',
//   '<img class="display_item" src="dddepth-172.jpg" alt="">'
// ]

const itemsList = document.querySelectorAll(".display_item");
const items = Array.from(itemsList);

// const items = [...itemsList];
const totalPages = Math.ceil(items.length / itemsPerPage);

const contentSection = document.getElementById('content');
const pagination = document.getElementById('pagination');

function displayItems(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  // console.log(totalPages);
  contentSection.innerHTML = '';

  // for(let i = startIndex; i < endIndex; i++){
  //   const itemSrc = items[i].getAttribute('src');
  //   const imgElement = document.createElement('img');
  //   imgElement.src = itemSrc;
  //   contentSection.appendChild(imgElement);
  // }

  // items.forEach((item, index) => {
  //   if (index >= startIndex && index < endIndex) {
  //     contentSection.appendChild(item);
  //     item .classList.add('fade-out');
  //     setTimeout(() => {
  //       item.classList.remove('fade-out');
  //     }, 50)
  //   }
  // });


  for(let i = startIndex; i < endIndex; i++){
    contentSection.appendChild(items[i]);

  items.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      contentSection.appendChild(item);
      item .classList.add('fade-out');
      setTimeout(() => {
        item.classList.remove('fade-out');
      }, 50)
    }
  });
    
    // const itemSrc = items[i].childNodes;
    // const imgElement = document.createElement('img');
    // imgElement.src = itemSrc;
    // contentSection.appendChild(itemSrc[0]);
    // contentSection.append(itemSrc[1], itemSrc[3]);
    // contentSection.appendChild(itemSrc[1]);
    
    contentSection.offsetHeight;
  }

  // paginatedItems.forEach(item => {
  //   const itemElement = document.createElement('div');
  //   // itemElement.textContent = item;
  //   itemElement.innerHTML = item;
  //   contentSection.appendChild(itemElement);
  // });
}
var page_no = 1;

const prev_button = document.createElement('div');
const first_button = document.createElement('div');
const curr_page = document.createElement('div');
const next_button = document.createElement('div');
const last_button = document.createElement('div');

first_button.classList.add("first");
prev_button.classList.add("prev");
curr_page.classList.add("curr_page");
next_button.classList.add("next");
last_button.classList.add("last");

first_button.textContent = "First";
prev_button.textContent = "prev";
curr_page.textContent =  page_no;
next_button.textContent = "next";
last_button.textContent = "last";

pagination.append(first_button);
pagination.append(prev_button);
pagination.append(curr_page);
pagination.append(next_button);
pagination.append(last_button);

// When First button clicked
first_button.addEventListener('click', () => {
  displayItems(1);
  curr_page.textContent =  1;
  page_no = 1;
});

// When Prev button clicked
prev_button.addEventListener('click', () => {
  if(page_no != 1){
    page_no--;
  }
  displayItems(page_no);
  curr_page.textContent =  page_no;
  
});

// When Next button clicked
next_button.addEventListener('click', () => {
  if(page_no < totalPages){
    page_no++;
  }
  displayItems(page_no);
  curr_page.textContent =  page_no;
  if(page_no == totalPages){
    curr_page.textContent = "End - "+page_no;
  }

});

// When last button clicked
last_button.addEventListener('click', () => {
  displayItems(totalPages);
  curr_page.textContent =  totalPages;
  page_no = totalPages;
  if(page_no == totalPages){
    curr_page.textContent = "End - "+page_no;
  }
});


displayItems(1);
