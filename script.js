// API URL
const API_URL = 'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json';

// State
let projectData = null;

// DOM Elements
const journeyBoard = document.getElementById('journeyBoard');
const journeyCollapsed = document.getElementById('journeyCollapsed');
const collapseBtn = document.getElementById('collapseBtn');
const expandBtn = document.getElementById('expandBtn');
const journeyContent = document.getElementById('journeyContent');
const pageTitle = document.getElementById('pageTitle');
const introSection = document.getElementById('introSection');
const cardsContainer = document.getElementById('cardsContainer');

// Initialize
async function init() {
    try {
        await fetchProjectData();
        renderContent();
        initResponsiveHandlers();
    } catch (error) {
        console.error('Error initializing:', error);
        showError();
    }
}

// Fetch API Data
async function fetchProjectData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');
        projectData = await response.json();
    } catch (error) {
        projectData = createFallbackData();
    }
}

function createFallbackData() {
    return {
        title: "Technical Project Management",
        description: "Explore the world of management",
        intro: "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        tasks: [
            {
                task_id: 1,
                task_title: "Technical Project Management",
                task_description: "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
                asset_type: "video",
                asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8"
            },
            {
                task_id: 2,
                task_title: "Threadbuild",
                task_description: "Watch the video and threadbuild, and jot out key threads while watching the video",
                asset_type: "threadbuilder"
            },
            {
                task_id: 3,
                task_title: "Structure your Pointers",
                task_description: "Write a 300 - 400 word article from your thread. Publish your understanding and showcase your understanding to the entire world",
                asset_type: "article"
            },
            {
                task_id: 4,
                task_title: "4SA Method",
                task_description: "To Explore more read more",
                asset_type: "4sa"
            }
        ]
    };
}

// Render Journey Board
function renderJourneyBoard() {
    const journeyHTML = `
        <div class="journey-item">
            <h4>• Explore the world of management</h4>
            <ul>
                <li>Technical Project Management</li>
                <li>Threadbuild</li>
                <li>Structure your pointers</li>
                <li>4SA Method</li>
            </ul>
        </div>
    `;
    journeyContent.innerHTML = journeyHTML;
}

// Render Main Content
function renderContent() {
    renderJourneyBoard();
    
    if (projectData.title) {
        pageTitle.textContent = projectData.title;
    }
    
    const introHTML = `
        <h2>${projectData.description || 'Explore the world of management'}</h2>
        <p>${projectData.intro || 'As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?'}</p>
    `;
    introSection.innerHTML = introHTML;
    
    if (projectData.tasks && projectData.tasks.length > 0) {
        const cardsHTML = projectData.tasks.map(task => createTaskCard(task)).join('');
        cardsContainer.innerHTML = cardsHTML;
        addCardEventListeners();
    }
}

// Create Task Card
function createTaskCard(task) {
    const cardContent = getCardContent(task);
    
    return `
        <div class="task-card" data-task-id="${task.task_id}">
            <div class="card-header">
                <h3>${task.task_title}</h3>
                <div class="info-icon">i</div>
            </div>
            <div class="card-body">
                <div class="card-description">
                    <strong>Description:</strong> ${task.task_description}
                </div>
                ${cardContent}
            </div>
        </div>
    `;
}

// Get Card Content based on asset type
function getCardContent(task) {
    switch (task.asset_type) {
        case 'video':
            return createVideoContent(task);
        case 'threadbuilder':
            return createThreadBuilderContent();
        case 'article':
            return createArticleContent();
        case '4sa':
            return create4SAContent();
        default:
            return '';
    }
}

// Create Video Content
function createVideoContent(task) {
    return `
        <div class="video-container">
            <iframe 
                src="${task.asset_content || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
}

// Create Thread Builder Content
function createThreadBuilderContent() {
    return `
        <div class="thread-section">
            <div class="thread-header" onclick="toggleThread(this)">
                <i class="fas fa-chevron-up"></i>
                <strong>Thread A</strong>
            </div>
            <div class="thread-content">
                <div class="sub-thread-row">
                    <input type="text" class="sub-thread-input" placeholder="Sub-thread 1">
                    <input type="text" class="sub-thread-input" placeholder="Sub Interpretation 1">
                </div>
                <div class="thread-actions">
                    <button class="action-btn"><i class="fas fa-lightbulb"></i></button>
                    <button class="action-btn"><i class="fas fa-comment"></i></button>
                    <button class="action-btn"><i class="fas fa-question"></i></button>
                    <button class="action-btn"><i class="fas fa-save"></i></button>
                    <select class="action-btn" style="width: auto; padding: 5px;">
                        <option>Select Categ</option>
                    </select>
                    <select class="action-btn" style="width: auto; padding: 5px;">
                        <option>Select Process</option>
                    </select>
                </div>
                <button class="add-sub-thread">
                    <i class="fas fa-plus"></i> Sub-thread
                </button>
                <div class="thread-summary">
                    <label>Summary for Thread A</label>
                    <textarea class="summary-textarea" placeholder="Enter Text here"></textarea>
                </div>
            </div>
        </div>
    `;
}

// Create Article Content
function createArticleContent() {
    return `
        <div class="article-section">
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Title</label>
            <input type="text" class="article-input" placeholder="Enter title">
            
            <label style="display: block; margin-bottom: 8px; margin-top: 15px; font-weight: 500;">Content</label>
            <div class="editor-toolbar">
                <button class="toolbar-btn">File</button>
                <button class="toolbar-btn">Edit</button>
                <button class="toolbar-btn">View</button>
                <button class="toolbar-btn">Insert</button>
                <button class="toolbar-btn">Format</button>
                <button class="toolbar-btn">Tools</button>
                <button class="toolbar-btn">Table</button>
                <button class="toolbar-btn">Help</button>
            </div>
            <textarea class="summary-textarea" style="min-height: 150px; margin-top: 10px;" placeholder="Start writing your article..."></textarea>
        </div>
    `;
}

// Create 4SA Content
function create4SAContent() {
    return `
        <div class="method-section">
            <div class="method-item">
                <div class="method-header" onclick="toggleMethod(this)">
                    <i class="fas fa-chevron-up"></i>
                    <strong>Introduction</strong>
                </div>
                <div class="method-content">
                    The 4SA Method, How to bring a idea into progress?
                    <button class="see-more">See More</button>
                </div>
            </div>
            
            <div class="method-item">
                <div class="method-header" onclick="toggleMethod(this)">
                    <i class="fas fa-chevron-up"></i>
                    <strong>Thread A</strong>
                </div>
                <div class="method-content">
                    How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?
                    <button class="see-more">See More</button>
                    <div style="margin-top: 15px; padding: 15px; background: #fff; border-radius: 5px;">
                        <strong>Example 1</strong>
                        <p style="margin-top: 10px; color: #666;">You have a concept, How will you put into progress?</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Toggle Thread
function toggleThread(element) {
    element.classList.toggle('active');
    const content = element.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Toggle Method
function toggleMethod(element) {
    element.classList.toggle('active');
    const content = element.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Add Card Event Listeners
function addCardEventListeners() {
    document.querySelectorAll('.add-sub-thread').forEach(btn => {
        btn.addEventListener('click', function() {
            const threadContent = this.closest('.thread-content');
            const subThreadRow = document.createElement('div');
            subThreadRow.className = 'sub-thread-row';
            subThreadRow.innerHTML = `
                <input type="text" class="sub-thread-input" placeholder="Sub-thread ${threadContent.querySelectorAll('.sub-thread-row').length + 1}">
                <input type="text" class="sub-thread-input" placeholder="Sub Interpretation ${threadContent.querySelectorAll('.sub-thread-row').length + 1}">
            `;
            threadContent.insertBefore(subThreadRow, this.parentElement);
        });
    });
}

// Initialize Responsive Handlers
function initResponsiveHandlers() {
    // Check viewport width
    const checkViewport = () => {
        const width = window.innerWidth;
        if (width <= 991) {
            // On tablet/mobile, journey board should be hidden by default
            journeyBoard.style.display = 'block';
            journeyCollapsed.style.display = 'block';
        } else {
            // On desktop, journey board should be visible
            journeyBoard.style.display = 'block';
            journeyCollapsed.style.display = 'none';
        }
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
}

// Show Error
function showError() {
    cardsContainer.innerHTML = `
        <div style="padding: 40px; text-align: center; color: #999;">
            <i class="fas fa-exclamation-circle" style="font-size: 48px; margin-bottom: 20px;"></i>
            <p>Unable to load project data. Please try again later.</p>
        </div>
    `;
}

// Journey Board Toggle
collapseBtn.addEventListener('click', () => {
    journeyBoard.classList.remove('active');
    journeyBoard.style.display = 'none';
    journeyCollapsed.style.display = 'block';
});

expandBtn.addEventListener('click', () => {
    journeyBoard.classList.add('active');
    journeyBoard.style.display = 'block';
    setTimeout(() => {
        journeyCollapsed.style.display = 'none';
    }, 300);
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) {
        if (!journeyBoard.contains(e.target) && !expandBtn.contains(e.target) && journeyBoard.classList.contains('active')) {
            journeyBoard.classList.remove('active');
            setTimeout(() => {
                journeyCollapsed.style.display = 'block';
            }, 300);
        }
    }
});

// Initialize app
init();
