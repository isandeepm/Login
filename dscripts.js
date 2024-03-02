// Sample data (replace with dynamic data from backend)
const tasks = [
    { title: 'Task 1', status: 'Incomplete' },
    { title: 'Task 2', status: 'Complete' },
    { title: 'Task 3', status: 'Incomplete' },
];

const deadlines = [
    { title: 'Deadline 1', date: '2024-03-01' },
    { title: 'Deadline 2', date: '2024-03-05' },
    { title: 'Deadline 3', date: '2024-03-10' },
];

const exams = [
    { subject: 'Math', date: '2024-03-15', duration: '2 hours' },
    { subject: 'Science', date: '2024-03-20', duration: '1.5 hours' },
    { subject: 'English', date: '2024-03-25', duration: '2.5 hours' },
];

const meetings = [
    { title: 'Meeting 1', date: '2024-03-02', time: '10:00 AM', location: 'Virtual' },
    { title: 'Meeting 2', date: '2024-03-08', time: '02:00 PM', location: 'Campus Room 101' },
    { title: 'Meeting 3', date: '2024-03-12', time: '11:30 AM', location: 'Virtual' },
];

// Function to render task list
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${task.title} - ${task.status}`;
        taskList.appendChild(listItem);
    });
}

// Function to render deadline list
function renderDeadlines() {
    const deadlineList = document.getElementById('deadlineList');
    deadlineList.innerHTML = '';
    deadlines.forEach(deadline => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${deadline.title} - ${deadline.date}`;
        deadlineList.appendChild(listItem);
    });
}

// Function to render exam list
function renderExams() {
    const examList = document.getElementById('examList');
    examList.innerHTML = '';
    exams.forEach(exam => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${exam.subject} - ${exam.date} (${exam.duration})`;
        examList.appendChild(listItem);
    });
}

// Function to render meeting list
function renderMeetings() {
    const meetingList = document.getElementById('meetingList');
    meetingList.innerHTML = '';
    meetings.forEach(meeting => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${meeting.title} - ${meeting.date} ${meeting.time} (${meeting.location})`;
        meetingList.appendChild(listItem);
    });
}

// Initial rendering
renderTasks();
renderDeadlines();
renderExams();
renderMeetings();
