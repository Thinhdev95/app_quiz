$(document).ready(function () {
    let index = 0;
 const app = {
    event: () => {
        $('text').append(function () {
           $('.nav-menu-mobile').toggleClass('active');
           $('.hamburger').toggleClass('active');
        })
        $("#addQuestion").click(function () {
            index++;
            const questionData = [];
            let title = $("#title-content").val();
            let html = `<div class="question-show-view p-5 bg-[#fff] mt-5">
                                 <div class="title-qs p-3">
                                    <span class="text-lg font-semibold">Question ${index}:</span>
                                    <span class="title">${title}</span>
                                 </div> <div class="form-qs text-lg pl-3">`;

            // Lặp qua từng "flex-row.mb-2" trong "question-show-edit"
            $(".question-show-edit > .quiz").each(function () {
                // Lấy giá trị của radio và content trong từng phần tử con
                const radioValue = $(this).find('input[type="radio"]').prop('checked') == true ? "checked": $(this).find('input[type="checkbox"]').prop('checked');
                const contentValue = $(this).find("#content").val() == "" ? "Answer has no content": $(this).find("#content").val();
    
                html += `<div class="flex items-center mb-6">
                                       <input id="default-radio-${index}" type="radio" name="default-radio-${index}" ${radioValue}
                                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                       <label for="default-radio-1" class="pl-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            ${contentValue}</label>
                                    </div>`; 

                // Đẩy dữ liệu vào mảng con
                questionData.push({
                    radio: radioValue,
                    content: contentValue
                });
            });
            html += `</div><div class="pt-5 w-10">
                                    <label class="-translate-y-2 translate-x-4 text-xs"
                                       style="position: absolute; background-color:white;" for="Scope">
                                       Score
                                    </label>
                                    <input class="border-double border-2 border-indigo-400" value=${index}
                                       style="max-width: 60px; text-align: center; height: 40px; border-radius: 10px;">
                                 </div></div>`;
            console.log(html)
            $('.question-list').append(html);
    
            console.log(questionData); // Kiểm tra kết quả trong console
        });
        $("#addQuestionDetail").click(function () {
                let html = `<div class="quiz flex flex-row mb-2">
                                    <div class="basis-1/12 flex pr-3 items-center justify-center ">
                                       <input id="radio" type="radio" value="" name="default-radio"
                                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    </div>
                                    <div class="basis-8/12 flex pr-3">
                                       <input id="content" class="w-full p-2.5 rounded-md border-b-2 divide-slate-200"
                                          placeholder="Enter the question content" />
                                    </div>
                                    <div class="basis-3/12 flex items-center">
                                       <div class="basis-1/3">
                                          <label class="inline-flex cursor-pointer">
                                             <input type="checkbox" value="" name="131" class="sr-only peer">
                                             <div
                                                class="relative w-11 h-6 bg-[#888787] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
                                                dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                                                rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] ư
                                                after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border
                                                after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#404080]">
                                             </div>
                                          </label>
                                       </div>
                                       <div class="basis-1/3">
                                          <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                                             class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                             type="button">
                                             <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 4 15">
                                                <path
                                                   d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                             </svg>
                                          </button>
                                       </div>
                                       <div class="basis-1/3">
                                           <svg id="btn-delete" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                             <path
                                                d="M13.3101 8.69531C12.9997 8.69531 12.748 8.94695 12.748 9.25737V19.8803C12.748 20.1906 12.9997 20.4424 13.3101 20.4424C13.6206 20.4424 13.8722 20.1906 13.8722 19.8803V9.25737C13.8722 8.94695 13.6206 8.69531 13.3101 8.69531Z"
                                                fill="#888787"></path>
                                             <path
                                                d="M6.67827 8.69531C6.36785 8.69531 6.11621 8.94695 6.11621 9.25737V19.8803C6.11621 20.1906 6.36785 20.4424 6.67827 20.4424C6.98875 20.4424 7.24033 20.1906 7.24033 19.8803V9.25737C7.24033 8.94695 6.98875 8.69531 6.67827 8.69531Z"
                                                fill="#888787"></path>
                                             <path
                                                d="M1.84438 7.14505V20.993C1.84438 21.8116 2.14452 22.5802 2.66881 23.1317C2.92697 23.4053 3.2382 23.6234 3.58349 23.7727C3.92877 23.922 4.30087 23.9994 4.67705 24.0001H15.3115C15.6877 23.9994 16.0598 23.9221 16.4051 23.7728C16.7504 23.6235 17.0616 23.4053 17.3197 23.1317C17.8441 22.5802 18.1441 21.8116 18.1441 20.993V7.14505C19.1864 6.8684 19.8617 5.86153 19.7224 4.79209C19.5827 3.72283 18.6718 2.92301 17.5933 2.92279H14.7156V2.22021C14.7172 1.92774 14.6607 1.63785 14.5494 1.36739C14.438 1.09693 14.2741 0.851277 14.067 0.6447C13.8599 0.438144 13.6138 0.274792 13.3431 0.164131C13.0723 0.0534698 12.7822 -0.00229572 12.4898 7.28574e-05H7.49882C7.20632 -0.00230318 6.91626 0.0534588 6.64549 0.16412C6.37471 0.274782 6.12862 0.438137 5.92151 0.6447C5.71446 0.851277 5.5505 1.09693 5.43917 1.36739C5.32783 1.63785 5.27133 1.92774 5.27295 2.22021V2.92279H2.39531C1.31683 2.92301 0.405896 3.72283 0.266224 4.79209C0.126833 5.86153 0.802149 6.8684 1.84438 7.14505ZM15.3115 22.8759H4.67711C3.7161 22.8759 2.9685 22.0504 2.9685 20.993V7.19445H17.02V20.993C17.02 22.0505 16.2725 22.8759 15.3115 22.8759ZM6.39707 2.22021C6.39524 2.07531 6.42253 1.93151 6.47733 1.79735C6.53213 1.66319 6.61333 1.54141 6.7161 1.43923C6.81883 1.33699 6.94105 1.25643 7.0755 1.20231C7.20996 1.1482 7.35391 1.12163 7.49882 1.12419H12.4898C12.6347 1.12163 12.7786 1.1482 12.9131 1.20231C13.0475 1.25643 13.1697 1.33699 13.2725 1.43923C13.3753 1.5414 13.4565 1.66318 13.5112 1.79734C13.566 1.9315 13.5933 2.07531 13.5915 2.22021V2.92279H6.39707V2.22021ZM2.39531 4.04691H17.5934C18.1521 4.04691 18.6051 4.49988 18.6051 5.05862C18.6051 5.61737 18.1521 6.07033 17.5934 6.07033H2.39525C1.83651 6.07033 1.38355 5.61737 1.38355 5.05862C1.38355 4.49988 1.83651 4.04691 2.39525 4.04691H2.39531Z"
                                                fill="#888787"></path>
                                             <path
                                                d="M9.99468 8.69531C9.68425 8.69531 9.43262 8.94695 9.43262 9.25737V19.8803C9.43262 20.1906 9.68425 20.4424 9.99468 20.4424C10.3052 20.4424 10.5567 20.1906 10.5567 19.8803V9.25737C10.5567 8.94695 10.3052 8.69531 9.99468 8.69531Z"
                                                fill="#888787"></path>
                                          </svg>
                                       </div>
                                    </div>
                                 </div>`; 

            $('.question-show-edit').append(html);
        });
        $(document).on('click', '#btn-delete', function() {
            $(this).closest('.flex-row').remove(); // Xóa đúng thẻ div cha của nút được nhấn
        });
        // handle call api 
        // CRUD 
        // Step 1. Create
        $(document).on('click', '#btn-delete', function() {
         $(this).closest('.flex-row').remove(); // Xóa đúng thẻ div cha của nút được nhấn
     });


    },
    init: function () {
        this.event();
    }
 }
 app.init();
});