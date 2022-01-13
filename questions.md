1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
 
 Ans : ใข้เวลาทำประมาณ 4 ชั่วโมงถ้ามีเวลามากกว่านี้อยากทำ
 1.1 sortby column ทำ sort ข้อมูลด้วย column ของตาราง
 1.2 search ด้วยข้อมูลต่างๆของกองทุน
 1.3 unit test อยากทำ test ให้หลาย condition มากกว่านี้

 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it
 
 Ans: เนื่องจากไม่สามารถดึงข้อมูลจาก browser ได้โดยตรงเลยต้องใช้ฝั่ง server ในการดึงข้อมูลแทนโดยใช้ getServerSideProps โดยมีขั้นตอนแบบนี้ 
 2.1 initial data from api
 fetch data from getServerSideProps => 
 return data as props to page => 
 send props to view component => 
 send data to initial state at hook => 
 get state from hook => 
 send state to other component as props =>
 render data

 2.2 if user filter other period
 call router with query to run getServerSideProps with new query => 
 do 2.1 again

3. How would you track down a performance issue in production? Have you ever had to do this?

 Ans: รู้ว่าสามารถตั้ง sentry ขึ้นมาและสามารถ monitor issues จาก production ได้แต่ยังไม่มีประสบการณ์ครับ

4. How would you improve the FINNOMENA APIs that you just used?

Ans: มี pagination มาให้ด้้วยจะดีมากครับ
 