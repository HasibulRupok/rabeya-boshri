let blogs = [
    {
        'title': "This is my blog title 1, demo blog for the font end",
        'date': '12-12-2012',
        'paragraph1': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda cupiditate temporibus similique et eius animi? Ipsam corrupti maxime assumenda reprehenderit architecto nobis corporis deserunt dolorum. Dignissimos facilis autem dolores velit corporis cum quisquam.',

        'paragraph2': 'Aorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda orem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda orem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda',

        'image': 'blog-1.jpeg'
    },
    {
        'title': "This is my blog title 2, demo blog for the font end",
        'date': '12-12-22222',
        'paragraph1': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda cupiditate temporibus similique et eius animi? Ipsam corrupti maxime assumenda reprehenderit architecto nobis corporis deserunt dolorum. Dignissimos facilis autem dolores velit corporis cum quisquam.',

        'paragraph2': 'Aorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda orem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda orem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda',

        'image': 'blog-1.jpeg'
    },

    {
        'title': "This is a blog that has no picture",
        'date': '12-12-22222',
        'paragraph1': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda cupiditate temporibus similique et eius animi? Ipsam corrupti maxime assumenda reprehenderit architecto nobis corporis deserunt dolorum. Dignissimos facilis autem dolores velit corporis cum quisquam.',

        'paragraph2': 'Aorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda orem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda orem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur consequatur quisquam laboriosam est ducimus aliquid magnam reprehenderit totam sint non, laborum quia, quo mollitia fuga, assumenda',

    },

]


let html = '';
blogs.forEach(blog => {
    if ('image' in blog) {
        const img = 'files/' + blog['image'];

        html += `
        <div class="eachPost my-7 pt-4">
            <h2 class="text-2xl blog-title">${blog['title']}</h2>
            <p class="text-sm font-extralight mb-2.5">${blog['date']}</p>
            <img src="${img}" class="blogImage" alt="">
            <p>${blog['paragraph1']}</p>
            <br>
            <p>${blog['paragraph2']}</p>
        </div>
    `;
    }
    else {
        html += `
        <div class="eachPost my-7 pt-4">
            <h2 class="text-2xl blog-title">${blog['title']}</h2>
            <p class="text-sm font-extralight mb-2.5">${blog['date']}</p>
            <p>${blog['paragraph1']}</p>
            <br>
            <p>${blog['paragraph2']}</p>
        </div>
    
    `;
    }

}
);

let blogContainer = document.getElementById('blogPostContainer');
html2 = '<p>hi</p>';
blogContainer.innerHTML = '';
blogContainer.innerHTML = html;
console.log(html);
