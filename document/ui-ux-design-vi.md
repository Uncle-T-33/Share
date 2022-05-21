Bài viết này là những ghi chú của mình trong khi nghiên cứu về UI/UX.

- [Khởi động](#khởi-động)
    - [Hãy bắt đầu từ feature, không phải layout](#hãy-bắt-đầu-từ-feature-không-phải-layout)
    - [Không nên design quá nhiều](#không-nên-design-quá-nhiều)
    - [Hãy chọn một phong cách](#hãy-chọn-một-phong-cách)
    - [Font chữ](#font-chữ)
    - [Border radius](#border-radius)
    - [Giới lại lựa chọn](#giới-lại-lựa-chọn)
- [Mọi thứ đều có cấp độ](#mọi-thứ-đều-có-cấp-độ)
    - [Font size không phải là tất cả](#font-size-không-phải-là-tất-cả)
    - [Không sử dụng màu xám cho khi có màu nền](#không-sử-dụng-màu-xám-cho-khi-có-màu-nền)
    - [Học cách nhấn mạnh](#học-cách-nhấn-mạnh)
    - [Hạn chế dùng label](#hạn-chế-dùng-label)
    - [Linh động phân cấp](#linh-động-phân-cấp)
    - [Cân bằng độ đậm nhạt và độ tương phản](#cân-bằng-độ-đậm-nhạt-và-độ-tương-phản)
    - [Ngữ nghĩa](#ngữ-nghĩa)
- [Layout và Spacing](#layout-và-spacing)
    - [Hãy thêm những khoảng cách](#hãy-thêm-những-khoảng-cách)
    - [Thiết lập một hệ thống khoảng cách và kích thước](#thiết-lập-một-hệ-thống-khoảng-cách-và-kích-thước)
    - [Không cần phải lấp đấy màn hình](#không-cần-phải-lấp-đấy-màn-hình)
    - [Hãy nghĩ tới việc dùng cột](#hãy-nghĩ-tới-việc-dùng-cột)
    - [Nên dùng grids nhưng phải cẩn thận](#nên-dùng-grids-nhưng-phải-cẩn-thận)
    - [Đơn vị relative không tự scale](#đơn-vị-relative-không-tự-scale)
    - [Để ý tới khoảng cách](#để-ý-tới-khoảng-cách)
- [Design text](#design-text)
    - [Thiết lập thang đo](#thiết-lập-thang-đo)
    - [Tránh sử dụng đơn vị em](#tránh-sử-dụng-đơn-vị-em)
    - [Chọn một font chữ tốt](#chọn-một-font-chữ-tốt)
    - [Kiểm soát độ dài text](#kiểm-soát-độ-dài-text)
    - [Dùng baseline, không nên center](#dùng-baseline-không-nên-center)
    - [Khoảng cách các dòng](#khoảng-cách-các-dòng)
    - [Không phải lúc nào link cũng cần màu sắc](#không-phải-lúc-nào-link-cũng-cần-màu-sắc)
    - [Căn giữa những không nên để text căn giữa quá dài](#căn-giữa-những-không-nên-để-text-căn-giữa-quá-dài)
    - [Số thì nên căn phải](#số-thì-nên-căn-phải)
    - [Sử dụng letter-spacing](#sử-dụng-letter-spacing)
- [Làm việc với màu sắc](#làm-việc-với-màu-sắc)
    - [Sử dụng màu HSL](#sử-dụng-màu-hsl)
    - [Bạn thật sự cần nhiều màu hơn bạn nghĩ](#bạn-thật-sự-cần-nhiều-màu-hơn-bạn-nghĩ)
    - [Các bước chọn màu sắc phù hợp](#các-bước-chọn-màu-sắc-phù-hợp)
    - [Làm nổi bật](#làm-nổi-bật)
    - [Đừng quá dựa vào màu sắc](#đừng-quá-dựa-vào-màu-sắc)
- [Tạo độ sâu](#tạo-độ-sâu)
- [Làm việc với hình ảnh](#làm-việc-với-hình-ảnh)
    - [Sử dụng một hình ảnh đẹp](#sử-dụng-một-hình-ảnh-đẹp)
    - [Văn bản cần có độ tương phản nhất quán](#văn-bản-cần-có-độ-tương-phản-nhất-quán)
    - [Đứng scale up/ scale down icons](#đứng-scale-up-scale-down-icons)
    - [Đừng scale down screenshots](#đừng-scale-down-screenshots)
    - [Cẩn thận với hình ảnh người dùng tải lên](#cẩn-thận-với-hình-ảnh-người-dùng-tải-lên)
- [Một số gợi ý khác](#một-số-gợi-ý-khác)
    - [Thay đổi mặc định](#thay-đổi-mặc-định)
    - [Thêm đường viền](#thêm-đường-viền)
    - [Trang trí background](#trang-trí-background)
    - [Đừng để trạng thái trống](#đừng-để-trạng-thái-trống)

# Khởi động

### Hãy bắt đầu từ feature, không phải layout

Khi bắt đầu thiết kế một ứng dụng nào đó thường thì chúng ta sẽ nghĩ ngay đến việc thiết kế bố cục như thế nào. **Stop!!!** Hãy bắt đầu với tính năng của nó, hãy trả lời xem tính năng đó cần những trường gì, cần nút gì!

### Không nên design quá nhiều

Bạn không cần thiết phải design tất cả rồi chuyển sang bước tiếp theo mà hãy thử làm việc theo vòng tròn, liên tục cải thiện và phát triển chúng.

![Không nên design quá nhiều](assets/img/ui/1.png)

### Hãy chọn một phong cách

Mọi đi design đều có một phong cách, ngân hàng cần tạo sự an toàn chuyên nghiệp, start-up thì có thể thiết kế làm cho vui vẻ và vui tươi.

### Font chữ

Nếu bạn muốn có một vẻ ngoài thanh lịch hoặc cổ điển, bạn có thể muốn kết hợp một kiểu chữ serif trong thiết kế của bạn:

![Lựa chọn font chữ](assets/img/ui/2.png)

![Lựa chọn font chữ](assets/img/ui/3.png)

Nếu bạn đang tìm kiếm một cái nhìn đơn giản hơn, hoặc muốn dựa vào các yếu tố khác tạo phong cách, thì neutral sans sẽ rất tuyệt vời:

![Lựa chọn font chữ](assets/img/ui/4.png)

Mặt chữ tiếng việt

![Lựa chọn font chữ](assets/img/ui/127.png)

### Border radius

Border radius nhỏ thường không thực sự truyền đạt nhiều về ý nghĩa phong cách

![Border radius](assets/img/ui/5.png)

Border radius lớn sẽ mang lại cảm giác vui tươi hơn

![Border radius](assets/img/ui/6.png)

Không có border radius sẽ mang lại cảm giác trang trọng

![Border radius](assets/img/ui/7.png)

Dù bạn chọn cái nào thì nhất định phải đồng bộ nó trong toàn ứng dụng, không nên pha trộn.

### Giới lại lựa chọn

Có hàng triệu màu sắc và hàng ngàn font chữ để lựa chọn chính vì thế nó sẽ làm bạn tê liệt trong những quyết định. Vì vậy hãy giới hạn những lựa chọn của bạn lại.

![Giới hạn lựa chọn](assets/img/ui/8.png)

Hãy giới hạn dần dần những lựa chọn trong vố số những lựa chọn.

![Giới hạn lựa chọn](assets/img/ui/9.png)

# Mọi thứ đều có cấp độ

Hệ thống phân cấp đề cập đến mức độ quan trọng của các yếu tố trong giao diện xuất hiện trong mối quan hệ với nhau và nó là công cụ hiệu quả nhất mà bạn có để tạo ra thứ gì đó cảm thấy được.

### Font size không phải là tất cả

Sử dụng quá nhiều kích thước để phân cấp là một hành động sai lầm

![Font size không phải là tất cả](assets/img/ui/10.png)

Thay vào đó chúng ta có thể sự dụng màu sắc và độ đậm nhạt của chữ cũng là một cách rất tối ưu

![Font size không phải là tất cả](assets/img/ui/11.png)

Hãy cố gắng sử dụng 2 đến 3 màu với ý nghĩa như sau:

* Màu tối cho nội dung chính (như tiêu đề của bài viết)
* Màu xám cho nội dung thứ cấp (như ngày bài báo được xuất bản)
* Màu xám nhạt hơn cho nội dung cấp ba (có thể là thông báo bản quyền ở chân trang)

Tương tự có thể sử dụng 2 font-weight là đủ cho một UI tốt:

* Bình thường (400 hoặc 500 tùy thuộc vào phông chữ) cho hầu hết văn bản
* Đậm hơn (600 hoặc 700) cho văn bản bạn muốn nhấn mạnh

### Không sử dụng màu xám cho khi có màu nền

![Không sử dụng màu xám cho khi có màu nền](assets/img/ui/12.png)

Cách tối ưu cho trường hợp này là chọn màu the same hue, sau đó thay đổi saturation và lightness cho tới khi bạn cảm thấy ổn

![Không sử dụng màu xám cho khi có màu nền](assets/img/ui/13.png)

### Học cách nhấn mạnh

Thay vì nhấn mạnh chúng, có thể làm giảm độ quan trọng những phần tử xung quanh chúng

![Học cách nhấn mạnh](assets/img/ui/14.png)![Học cách nhấn mạnh](assets/img/ui/15.png)

Trường hơn này thanh bên không quan trọng có thể để chúng lẫn vào background

![Học cách nhấn mạnh](assets/img/ui/16.png)

### Hạn chế dùng label

Vì nó sẽ gây khó khăn cho việc phân cấp dữ liệu, và nhấn mạnh phần quan trọng

Và không nhất thiết phải dùng lab vì một số định dạng đã nói lên ý nghĩa của chúng tỷ dụ như email, hay số điện thoại,..

![Hạn chế dùng label](assets/img/ui/17.png)![Hạn chế dùng label](assets/img/ui/18.png)

Hoặc có thể kết hợp label với value

![Hạn chế dùng label](assets/img/ui/19.png)![Hạn chế dùng label](assets/img/ui/20.png)

Đôi khi phải dùng thì hãy nên dùng chúng như một đối tượng thứ cấp

![Hạn chế dùng label](assets/img/ui/21.png)

Nhưng cũng có lúc phải nhấn label để thực hiện được mục đích

![Hạn chế dùng label](assets/img/ui/22.png)

### Linh động phân cấp

Tỷ dụ trong trường hợp này sử dụng H1 là hợp lý về mặt ngữ nghĩa và SEO nhưng về mật phân cấp cho người dùng thì không được ổn.

![Linh động phân cấp](assets/img/ui/23.png)

Trường hợp này chúng ta có thể giảm kích thước của chữ để phù hợp hơn

![Linh động phân cấp](assets/img/ui/24.png)

### Cân bằng độ đậm nhạt và độ tương phản

Để tăng độ nhấn mạnh ta có thể chữ in đậm, nhưng quá nhiều thì sẽ làm gây khó chịu, có một cách thay thế để nhấn mạnh đó là chúng ta thêm icon vào.

![Cân bằng độ đậm nhạt và độ tương phản](assets/img/ui/25.png)

Nhưng làm như trên thì sẽ làm mất cân bằng, và làm ngừoi dùng quá chú ý vào icon, vì thế chúng ta có thể giám độ tương phản của icon để giải quyết trường hợp trên.

![Cân bằng độ đậm nhạt và độ tương phản](assets/img/ui/26.png)

Đây là một trường hợp khác chúng ta nên cân đối độ đậm nhạt và tương phản

![Cân bằng độ đậm nhạt và độ tương phản](assets/img/ui/27.png)

![Cân bằng độ đậm nhạt và độ tương phản](assets/img/ui/28.png)

### Ngữ nghĩa

Mặc dù ngữ nghĩa là quan trọng nhưng đừng bao giờ quên sự phân cấp.

![Ngữ nghĩa](assets/img/ui/29.png)

Đây là cách giải quyết cho trường hợp này.

![Ngữ nghĩa](assets/img/ui/30.png)

Tham khảo thêm:

![Ngữ nghĩa](assets/img/ui/31.png)

![Ngữ nghĩa](assets/img/ui/32.png)

# Layout và Spacing

### Hãy thêm những khoảng cách

Cách giải quyết vấn đề khi thiết kế mang cảm giác ngột ngạt, chật chội là thêm vào giữa chúng những khoảng câch

![Hãy thêm những khoảng cách](assets/img/ui/33.png)

![Hãy thêm những khoảng cách](assets/img/ui/34.png)

### Thiết lập một hệ thống khoảng cách và kích thước

Đừng để bản thân phải rơi vào tình trạng 120px hay 123px, hãy thiết lập giới hạn hệ thống khoảng cách và kích thước để follow theo

![Thiết lập một hệ thống khoảng cách và kích thước](assets/img/ui/35.png)

Việc tạo ra hệ thống này rất đơn giản, bạn cần thiết lập một đơn vị, và sử dụng tất cả với bộ số của đơn vị đó. ví dụ 4px, thì bộ số của nó là 8px, 16px,…

![Thiết lập một hệ thống khoảng cách và kích thước](assets/img/ui/36.png)

16 là con số tuyệt vời để bạn bắt đầu

![Thiết lập một hệ thống khoảng cách và kích thước](assets/img/ui/37.png)

Và mọi thứ sẽ trở nên hoàn hảo hơn

![Thiết lập một hệ thống khoảng cách và kích thước](assets/img/ui/38.png)

### Không cần phải lấp đấy màn hình

Đây là minh chứng

![Không cần phải lấp đấy màn hình](assets/img/ui/39.png)

![Không cần phải lấp đấy màn hình](assets/img/ui/40.png)

![Không cần phải lấp đấy màn hình](assets/img/ui/41.png)

### Hãy nghĩ tới việc dùng cột

Đôi khi bạn gặp phải trường hợp trông không cân bằng và rườm rà thì hãy nghĩ đến việc chia cột

![Hãy nghĩ tới việc dùng cột](assets/img/ui/42.png)

![Hãy nghĩ tới việc dùng cột](assets/img/ui/43.png)

### Nên dùng grids nhưng phải cẩn thận

Ví dụ trong trường hợp này thì ta nên fix phần sidebar ở bên tay trái

![Nên dùng grids nhưng phải cẩn thận](assets/img/ui/44.png)

Hay là hình ảnh nên fix kích thước

![Nên dùng grids nhưng phải cẩn thận](assets/img/ui/45.png)

Trưởng hợp này thì lại nên dùng max-width để không bị to card khi chuyển từ màn hình desktop sang tablet

![Nên dùng grids nhưng phải cẩn thận](assets/img/ui/46.png)

![Nên dùng grids nhưng phải cẩn thận](assets/img/ui/47.png)

### Đơn vị relative không tự scale

Bạn nên cẩn thận khi sử dụng các đơn vị relative như rem hay em, bởi vì chúng đôi khi không tự động scale như mong muốn khi responsive

![Đơn vị relative không tự scale](assets/img/ui/48.png)

![Đơn vị relative không tự scale](assets/img/ui/49.png)

### Để ý tới khoảng cách

Bạn nên để ý tới khoảng cách giữa các phần để tránh gây nhầm lẫn cho user.

![Để ý tới khoảng cách](assets/img/ui/50.png)

![Để ý tới khoảng cách](assets/img/ui/51.png)

![Để ý tới khoảng cách](assets/img/ui/52.png)

![Để ý tới khoảng cách](assets/img/ui/53.png)

![Để ý tới khoảng cách](assets/img/ui/54.png)

# Design text

### Thiết lập thang đo

Có nhiều cách thiết lập thang đo size text tỷ dụ như tỷ lệ 2:3, tỷ lệ vàng nhưng cách tốt nhất vẫn nên lấy thang đo này phù hợp cho tất cả mọi dự án

![Thiết lập thang đo](assets/img/ui/55.png)

### Tránh sử dụng đơn vị em

Lý do là vì đơn vị em nó không thực sự scale mà nó còn bị ảnh hưởng bơi sự lồng nhau của các thẻ.

### Chọn một font chữ tốt

* Sự lựa chọn an toàn: `-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;`
* Bỏ qua những font chữ có weight ít hơn 5
* Hãy tin vào số đông
* Kiểm tra font chữ các trang khác nếu như bạn thích chúng

### Kiểm soát độ dài text

Để có trải nghiệm đọc tốt nhất không gây sự khó chịu, hãy làm cho đoạn văn của bạn đủ rộng để phù hợp với từ 45 đến 75 ký tự trên mỗi dòng.

![Kiểm soát độ dài text](assets/img/ui/56.png)

![Kiểm soát độ dài text](assets/img/ui/57.png)

![Kiểm soát độ dài text](assets/img/ui/58.png)

![Kiểm soát độ dài text](assets/img/ui/59.png)

### Dùng baseline, không nên center

Khi có nhiều font-size khác nhau cùng trên một dòng, nếu như chúng xa nhau thì hầu như k có vẫn đề nhưng nếu chúng gần nhau thì nhìn rất tệ. Vì thế cách giải quyết là sử dụng baseline

![Dùng baseline, không nên center](assets/img/ui/60.png)

![Dùng baseline, không nên center](assets/img/ui/61.png)

### Khoảng cách các dòng

Chiều cao dòng và chiều rộng đoạn của bạn phải tỷ lệ thuận - nội dung hẹp có thể sử dụng chiều cao dòng ngắn hơn như 1,5, nhưng nội dung rộng có thể cần chiều cao dòng cao tới 2.

![Khoảng cách các dòng](assets/img/ui/62.png)

![Khoảng cách các dòng](assets/img/ui/63.png)

Ngoài ra còn phải dựa vào font-size khi chữ nhỏ chúng ta nên để xa một chút cho ngừoi dùng dễ đọc, không xảy ra trường hợp đọc 2 lần một dòng. Nhưng khi font-size lớn thì nên để hight-line gần hơn tránh cảm giác trống trải.

![Khoảng cách các dòng](assets/img/ui/64.png)

![Khoảng cách các dòng](assets/img/ui/65.png)

### Không phải lúc nào link cũng cần màu sắc

![Không phải lúc nào link cũng cần màu sắc](assets/img/ui/66.png)

![Không phải lúc nào link cũng cần màu sắc](assets/img/ui/67.png)

### Căn giữa những không nên để text căn giữa quá dài

![Căn giữa những không nên để text căn giữa quá dài](assets/img/ui/68.png)

![Căn giữa những không nên để text căn giữa quá dài](assets/img/ui/69.png)

### Số thì nên căn phải

![Số thì nên căn phải](assets/img/ui/70.png)

### Sử dụng letter-spacing

Bạn hãy tin tưởng vào người thiết kế font chữ nhưng đôi khi bạn muốn thay đổi khoảng cách các chữ để có một thiết kế ổn hơn.

Title có thể sát hơn một chút

![Sử dụng letter-spacing](assets/img/ui/71.png)

Khi chữ in hoa thì nên để xa một chút

![Sử dụng letter-spacing](assets/img/ui/72.png)

# Làm việc với màu sắc

### Sử dụng màu HSL

HSL thể hiện màu sắc bằng cách sử dụng các thuộc tính mà mắt người nhận thấy bằng trực giác: màu sắc, độ bão hòa và độ sáng.

Hue là một vị trí màu trên bánh xe màu được đo bằng độ, trong đó 0 ° là màu đỏ, 120 ° là màu xanh lá cây và 240 ° là màu xanh lam.

![Sử dụng màu HSL](assets/img/ui/73.png)

Saturation: là màu sắc sặc sỡ hoặc sống động như thế nào. Độ bão hòa 0% là màu xám (không màu) và độ bão hòa 100% rực rỡ và mãnh liệt.

![Sử dụng màu HSL](assets/img/ui/74.png)

Lightness: độ sáng 0% là màu đen thuần khiết, độ sáng 100% là màu trắng tinh khiết và độ sáng 50% là màu thuần khiết ở màu sắc nhất định.

![Sử dụng màu HSL](assets/img/ui/75.png)

### Bạn thật sự cần nhiều màu hơn bạn nghĩ

Nếu bạn nghĩ là chỉ chọn ra một số màu và follow theo chúng để thiết kế thì kế quả nó sẽ ra như thế này

![Bạn thật sự cần nhiều màu hơn bạn nghĩ](assets/img/ui/76.png)

Thực tế là bạn cần hơn thế rất nhiều

![Bạn thật sự cần nhiều màu hơn bạn nghĩ](assets/img/ui/77.png)

Một bảng màu tốt bạn cần chia râ ba thể loại

**Gray**: Text, backgrounds, panels, form controls - hầu hết giao diện đều là màu gray

![Bạn thật sự cần nhiều màu hơn bạn nghĩ](assets/img/ui/78.png)

![Bạn thật sự cần nhiều màu hơn bạn nghĩ](assets/img/ui/79.png)

**Primary**: Là màu chủ đạo của sản phẩm

![Bạn thật sự cần nhiều màu hơn bạn nghĩ](assets/img/ui/80.png)

**Accent**: Trên các màu cơ bản, mỗi trang web cần một vài màu nhấn để truyền đạt những điều khác nhau đến người dùng.

![Bạn thật sự cần nhiều màu hơn bạn nghĩ](assets/img/ui/81.png)

![Bạn thật sự cần nhiều màu hơn bạn nghĩ](assets/img/ui/82.png)

### Các bước chọn màu sắc phù hợp

Chọn màu cơ sở đầu tiên

![Các bước chọn màu sắc phù hợp](assets/img/ui/83.png)

Tiếp theo chọn màu tối nhất và màu sáng nhất (màu tối nhất thường sẽ là text, màu sáng nhất sẽ là màu background cho element)

![Các bước chọn màu sắc phù hợp](assets/img/ui/84.png)

Cuối cùng là thêm một số màu vào trung gian, và con số _9_ là một con số đẹp cho việc tạo một danh sách màu

![Các bước chọn màu sắc phù hợp](assets/img/ui/85.png)

### Làm nổi bật

Thường thì chúng ta sẽ phải để chữ sáng trên nền tối

![Làm nổi bật](assets/img/ui/86.png)

Nhưng có một cách hay hơn đó là để chữ tối trên nền sáng cũng sẽ mang hiệu quả tương tự

![Làm nổi bật](assets/img/ui/87.png)

### Đừng quá dựa vào màu sắc

Màu sắc có thể là một cách tuyệt vời để tăng cường thông tin và làm cho nó dễ hiểu hơn, nhưng hãy cẩn thận đừng dựa vào nó tỷ dụ người mù mày sẽ không hiểu chúng

![Đừng quá dựa vào màu sắc](assets/img/ui/88.png)

Để fix những tình huống này bạn nên thay vào những icon hoặc text để mô tả chúng

![Đừng quá dựa vào màu sắc](assets/img/ui/89.png)

# Tạo độ sâu

Dưới đây là một vài ví dụ

![Sử dụng bóng đổ để tạo độ sâu](assets/img/ui/90.png)

![Sử dụng bóng đổ để tạo độ sâu](assets/img/ui/91.png)

![Sử dụng bóng đổ để tạo độ sâu](assets/img/ui/92.png)

Bóng lớn thường phù hợp với dialog

![Sử dụng bóng đổ để tạo độ sâu](assets/img/ui/93.png)

Kết hợp hai bóng đổ

![Sử dụng bóng đổ để tạo độ sâu](assets/img/ui/94.png)

# Làm việc với hình ảnh

### Sử dụng một hình ảnh đẹp

Những bức ảnh xấu sẽ làm hỏng một thiết kế, ngay cả khi mọi thứ khác về nó trông tuyệt vời.

![Sử dụng một hình ảnh đẹp](assets/img/ui/95.png)

### Văn bản cần có độ tương phản nhất quán

![Văn bản cần có độ tương phản nhất quán](assets/img/ui/96.png)

![Văn bản cần có độ tương phản nhất quán](assets/img/ui/97.png)

Giải quyết bài toán này bằng cách, cho hình ảnh tói và chữ màu sáng hoặc ngược lại

![Văn bản cần có độ tương phản nhất quán](assets/img/ui/98.png)

![Văn bản cần có độ tương phản nhất quán](assets/img/ui/99.png)

Hoặc có thể đổi màu cho hình ảnh

![Văn bản cần có độ tương phản nhất quán](assets/img/ui/100.png)

Hay tạo bóng đổ cho text

![Văn bản cần có độ tương phản nhất quán](assets/img/ui/101.png)

### Đứng scale up/ scale down icons

Bạn không nên scale up icon lên 3, 4 lần mặc dù nó có là file vector

![Đứng scale up icons](assets/img/ui/102.png)

Nếu bạn muốn to bạn có thể giải quyết bằng cách như sau

![Đứng scale up icons](assets/img/ui/103.png)

### Đừng scale down screenshots

![Đừng scale down screenshots](assets/img/ui/104.png)

Dưới đây là những cách giải quyết trong trường hợp này

![Đừng scale down screenshots](assets/img/ui/105.png)

![Đừng scale down screenshots](assets/img/ui/106.png)

![Đừng scale down screenshots](assets/img/ui/107.png)

### Cẩn thận với hình ảnh người dùng tải lên

![Cẩn thận với hình ảnh người dùng tải lên](assets/img/ui/108.png)

Bản hãy căn giữa hình ảnh và cắn xén những phần không cần thiết

![Cẩn thận với hình ảnh người dùng tải lên](assets/img/ui/109.png)

Trường hợp này tỷ dụ người dùng đăng ảnh cùng với màu nền trông sẽ rất tệ

![Cẩn thận với hình ảnh người dùng tải lên](assets/img/ui/110.png)

Giải quyết bằng cách thêm vào inner box shadow

![Cẩn thận với hình ảnh người dùng tải lên](assets/img/ui/111.png)

# Một số gợi ý khác

### Thay đổi mặc định

![Thay đổi mặc định](assets/img/ui/112.png)

![Thay đổi mặc định](assets/img/ui/113.png)

![Thay đổi mặc định](assets/img/ui/114.png)

![Thay đổi mặc định](assets/img/ui/115.png)

![Thay đổi mặc định](assets/img/ui/116.png)

### Thêm đường viền

Thêm đường viền lớn vào các thiết kế của bạn cho mọi thứ đỡ nhạt nhẽo

![Thêm đường viền](assets/img/ui/117.png)

![Thêm đường viền](assets/img/ui/118.png)

![Thêm đường viền](assets/img/ui/119.png)

![Thêm đường viền](assets/img/ui/120.png)

![Thêm đường viền](assets/img/ui/121.png)

### Trang trí background

![Trang trí background](assets/img/ui/122.png)

![Trang trí background](assets/img/ui/123.png)

### Đừng để trạng thái trống

![Đừng để trạng thái trống](assets/img/ui/124.png)

![Đừng để trạng thái trống](assets/img/ui/125.png)

![Đừng để trạng thái trống](assets/img/ui/126.png)

I hope this could help you!!!

PS: Copy from Internet 🐧🐧🐧