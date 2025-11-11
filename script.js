// App data with download links and images
const appsData = [
    { name: 'Movie Hub', iconImg: 'https://gcdnb.pbrd.co/images/OySCh7NsXyCt.png', iconClass: 'movie-hub', status: 'Premium Unlocked', downloads: '1K+', size: '15MB', version: '1.0', rating: '4.8⭐', downloadUrl: 'https://www.mediafire.com/file/mend2slr0qkqfnj/MOVIES_HUB.apk/file' },
    { name: 'Play Store', iconImg: 'https://apks.urmaxx.in/file/69071fec8111dbdbc7066f6b', iconClass: 'play-store', status: 'Free', downloads: '5K+', size: '25MB', version: '2.1', rating: '4.5⭐', downloadUrl: 'https://www.mediafire.com/file/8xffaud4jb8fw0x/Play_Store.apk/file' },
    { name: 'Phone Pay', iconImg: 'https://apks.urmaxx.in/file/69039d751fac4518f62521a5', iconClass: 'phone-pay', status: 'Free', downloads: '3K+', size: '18MB', version: '1.5', rating: '4.7⭐', downloadUrl: 'https://www.mediafire.com/file/83zo0yi2wboq1nf/%25E2%25B1%25A3%25C4%25A6%25C3%2598N%25C9%2586_%25E2%2584%2599%25E1%258E%25AA%25C9%258E.apk/file' },
    { name: 'INFINITYREDEEM', iconImg: 'https://apks.urmaxx.in/file/68fce9154f36a5ee4317b7f9', iconClass: 'redeem', status: 'Free', downloads: '2K+', size: '12MB', version: '1.2', rating: '4.6⭐', downloadUrl: 'https://www.mediafire.com/file/ulaph2uwnoulqc3/INFINITY_REDEEM.apk/file' },
    { name: 'ZAIN BOOMBER', iconImg: 'https://apks.urmaxx.in/file/68ed26b0d14885f522de72a9', iconClass: 'boomer', status: 'Free', downloads: '1K+', size: '10MB', version: '1.0', rating: '4.4⭐', downloadUrl: 'https://www.mediafire.com/file/9pp5l27cux9hocm/%25F0%259D%2590%258C%25F0%259D%2590%2580%25F0%259D%2590%2597%25F0%259D%2590%2597_%25F0%259D%2590%2581%25F0%259D%2590%258E%25F0%259D%2590%258C%25F0%259D%2590%2581%25F0%259D%2590%2584%25F0%259D%2590%2591.apk/file' },
    { name: 'Block Insta', iconImg: 'https://apks.urmaxx.in/file/68e69df850093022932b7276', iconClass: 'block', status: 'Free', downloads: '800+', size: '8MB', version: '1.1', rating: '4.3⭐', downloadUrl: 'https://www.mediafire.com/file/z717ui52snbnuvl/Block_Viewer.apk/file' },
    { name: 'Gpay', iconImg: 'https://apks.urmaxx.in/file/68deb98550093022932af8ea', iconClass: 'gpay', status: 'Free', downloads: '4K+', size: '20MB', version: '2.0', rating: '4.8⭐', downloadUrl: 'https://www.mediafire.com/file/z3mlobkjchl06wy/GPay.apk/file' },
    { name: 'Fampay', iconImg: 'https://apks.urmaxx.in/file/68d8fda050093022932a7c90', iconClass: 'epfo', status: 'Free', downloads: '1.5K+', size: '14MB', version: '1.3', rating: '4.5⭐', downloadUrl: 'https://www.mediafire.com/file/98nedip23s084m0/FamPay.apk/file' },
    { name: 'Jalwa Mod', iconImg: 'https://apks.urmaxx.in/file/68d7876b50093022932a589c', iconClass: 'jalwa', status: 'Free', downloads: '2K+', size: '16MB', version: '1.4', rating: '4.6⭐', downloadUrl: 'https://www.mediafire.com/file/vms3bbg3cbathpt/JALWA_VIP_MOD.apk/file' },
    { name: 'YouTube Lite', iconImg: 'https://apks.urmaxx.in/file/68cb0edfc5655e4f893a2dc6', iconClass: 'youtube', status: 'Free', downloads: '10K+', size: '30MB', version: '3.0', rating: '4.9⭐', downloadUrl: 'https://www.mediafire.com/file/gkz7lgapcpgqh7x/YouTube_Lite.apk/file' },
    { name: 'Inshort Premium', iconImg: 'https://apks.urmaxx.in/file/68c110e5b7caea7d40b46816', iconClass: 'instagram', status: 'Free', downloads: '8K+', size: '28MB', version: '2.5', rating: '4.7⭐', downloadUrl: 'https://www.mediafire.com/file/xjvop6dpiy1rf71/InShot_PREMIUM.apk/file' },
    { name: 'Lite Camera', iconImg: 'https://apks.urmaxx.in/file/68bfc7595d55160765385759', iconClass: 'camera', status: 'Free', downloads: '3K+', size: '12MB', version: '1.8', rating: '4.5⭐', downloadUrl: 'https://www.mediafire.com/file/cyq74z81jq46nh2/Live_Camera.apk/file' },
    { name: 'Movie Box', iconImg: 'https://apks.urmaxx.in/file/68bd34cb3b4211d73d234ec4', iconClass: 'maps', status: 'Free', downloads: '5K+', size: '22MB', version: '2.2', rating: '4.6⭐', downloadUrl: 'https://www.mediafire.com/file/ntkuxnaw2mw5ofo/MovieBox_.apk/file' },
    { name: 'Direct Locater', iconImg: 'https://apks.urmaxx.in/file/68b14bd83b4211d73d22be3f', iconClass: 'browser', status: 'Free', downloads: '6K+', size: '24MB', version: '2.3', rating: '4.7⭐', downloadUrl: 'https://www.mediafire.com/file/yjytm7bks4dd3ul/Direct_Locater.apk/file' },
    { name: 'Ads Remover', iconImg: 'https://apks.urmaxx.in/file/68aa0bcee0dc883df47900f8', iconClass: 'calculator', status: 'Free', downloads: '2K+', size: '5MB', version: '1.0', rating: '4.4⭐', downloadUrl: 'https://www.mediafire.com/file/57xe13xf1v85nb9/Ads_Remove.apk/file' },
    { name: 'Funsta', iconImg: 'https://apks.urmaxx.in/file/68a0bfe07f236eba23e2dccb', iconClass: 'Fun', status: 'Free', downloads: '4K+', size: '18MB', version: '1.6', rating: '4.8⭐', downloadUrl: 'https://www.mediafire.com/file/884shjrht6bqfwz/Funsta_3.5.3.apk/file' },

    // ADD YOUR NEW APPS BELOW THIS LINE
    // Example: 
    // { name: 'Your App Name', iconImg: 'https://image-url.com/icon.png', iconClass: 'your-class', status: 'Free', downloads: '1K+', size: '10MB', version: '1.0', rating: '4.5⭐', downloadUrl: 'https://mediafire.com/your-link' }
    ,
    {
        name: 'Modi ji Mario',
        iconImg: 'https://i.postimg.cc/SQgYN3JX/images-6.jpg',
        iconClass: 'whatsapp',
        status: 'Premium Unlocked',
        downloads: '10K+',
        size: '45MB',
        version: '3.5',
        rating: '4.9⭐',
        downloadUrl: 'https://www.mediafire.com/file/gw8gekc8ci5ijkh/Flying+Modi_null.apk/file'
    },
    {
        name: 'MOVIES HUB',
        iconImg: 'https://i.postimg.cc/HxtbGBGm/images-2.png',
        iconClass: 'whatsapp',
        status: 'Premium Unlocked',
        downloads: '10K+',
        size: '45MB',
        version: '3.5',
        rating: '4.9⭐',
        downloadUrl: 'https://www.mediafire.com/file/g3u74aflkbpmaep/MOVIES+HUB.apk/file'
    },

];

// Render apps
const apksGrid = document.getElementById('apksGrid');
let currentAppData = null;

function renderApps() {
    apksGrid.innerHTML = '';
    appsData.forEach((app, index) => {
        const card = document.createElement('div');
        card.className = 'apk-card';
        card.innerHTML = `
            <div class="apk-icon ${app.iconClass}">
                <img src="${app.iconImg}" alt="${app.name}" onerror="this.style.display='none'">
            </div>
            <h3>${app.name}</h3>
            <p class="status">${app.status}</p>
            <div class="stats">
                <span>📥 ${app.downloads}</span>
                <span>📦 ${app.size}</span>
            </div>
            <button class="view-btn" data-index="${index}">View Details</button>
        `;
        apksGrid.appendChild(card);
    });
}

renderApps();

// Modal elements
const detailsModal = document.getElementById('detailsModal');
const unlockModal = document.getElementById('unlockModal');
const detailsCloseBtn = document.getElementById('detailsCloseBtn');
const unlockCloseBtn = document.getElementById('unlockCloseBtn');
const downloadModBtn = document.getElementById('downloadModBtn');
const unlockDownloadBtn = document.getElementById('unlockDownloadBtn');

// Show app details modal
apksGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-btn')) {
        const index = e.target.dataset.index;
        currentAppData = appsData[index];
        showDetailsModal(currentAppData);
    }
});

function showDetailsModal(app) {
    const modalIcon = document.getElementById('modalAppIcon');
    modalIcon.innerHTML = `<img src="${app.iconImg}" alt="${app.name}" onerror="this.style.display='none'">`;
    modalIcon.className = `app-icon-large ${app.iconClass}`;
    document.getElementById('modalAppName').textContent = app.name;
    document.getElementById('modalAppStatus').textContent = app.status;
    document.getElementById('modalDownloads').textContent = app.downloads;
    document.getElementById('modalSize').textContent = app.size;
    document.getElementById('modalVersion').textContent = app.version;
    document.getElementById('modalRating').textContent = app.rating;

    detailsModal.style.display = 'flex';
}

// Close details modal
detailsCloseBtn.addEventListener('click', () => {
    detailsModal.style.display = 'none';
});

detailsModal.addEventListener('click', (e) => {
    if (e.target === detailsModal) {
        detailsModal.style.display = 'none';
    }
});

// Show unlock modal when download button clicked
downloadModBtn.addEventListener('click', () => {
    detailsModal.style.display = 'none';
    unlockModal.style.display = 'flex';
});

// Close unlock modal
unlockCloseBtn.addEventListener('click', () => {
    unlockModal.style.display = 'none';
});

unlockModal.addEventListener('click', (e) => {
    if (e.target === unlockModal) {
        unlockModal.style.display = 'none';
    }
});

// Task completion tracking
let completedTasks = new Set();
const socialButtons = document.querySelectorAll('.social-btn');

socialButtons.forEach(button => {
    button.addEventListener('click', () => {
        const task = button.dataset.task;

        // Open social media link
        const urls = {
            telegram: 'https://t.me/your_channel',
            youtube: 'https://youtube.com/@your_channel',
            telegram2: 'https://t.me/your_second_channel',
            instagram: 'https://instagram.com/your_profile'
        };

        window.open(urls[task], '_blank');

        // Mark as completed
        if (!completedTasks.has(task)) {
            completedTasks.add(task);
            button.classList.add('completed');
            checkAllTasksCompleted();
        }
    });
});

function checkAllTasksCompleted() {
    if (completedTasks.size === 4) {
        unlockDownloadBtn.disabled = false;
        unlockDownloadBtn.classList.add('enabled');
    }
}

// Final download
unlockDownloadBtn.addEventListener('click', () => {
    if (!unlockDownloadBtn.disabled && currentAppData) {
        // Open download link
        if (currentAppData.downloadUrl && currentAppData.downloadUrl !== '#') {
            window.open(currentAppData.downloadUrl, '_blank');

            // Show success message
            setTimeout(() => {
                alert(`${currentAppData.name} download started! Check your downloads folder.`);
            }, 500);
        } else {
            alert(`Download link not available for ${currentAppData.name}`);
        }

        // Close modal
        unlockModal.style.display = 'none';

        // Reset for next download
        completedTasks.clear();
        socialButtons.forEach(btn => btn.classList.remove('completed'));
        unlockDownloadBtn.disabled = true;
        unlockDownloadBtn.classList.remove('enabled');
    }
});

// Enhanced Search functionality - searches by name and status
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.apk-card');

    if (searchTerm === '') {
        // Show all cards if search is empty
        cards.forEach(card => card.style.display = 'block');
        return;
    }

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const status = card.querySelector('.status').textContent.toLowerCase();

        // Search in both name and status
        const matches = title.includes(searchTerm) || status.includes(searchTerm);
        card.style.display = matches ? 'block' : 'none';
    });
});

// Pagination dots
const dots = document.querySelectorAll('.dot');

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});
