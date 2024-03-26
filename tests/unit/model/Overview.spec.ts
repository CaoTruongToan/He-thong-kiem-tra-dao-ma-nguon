import {Overview} from "@/model/Overview";
import {Metric} from "@/model/Metric";
import {Cluster} from "@/model/Cluster";
test('overview', () => {
    const submissionFolderPath:Array<string> = ["C:\\Users\\23651\\Desktop\\JPlag\\core\\src\\test\\resources\\de\\jplag\\samples\\PartialPlagiarism"]
    const baseCodeFolderPath = "";
    const language = "Javac based AST plugin";
    const fileExtensions: Array<string> = [".java",".JAVA"];
    const matchSensitivity = 9;
    const dateOfExecution = "20/04/23";
    const durationOfExecution = 40;
    const metrics: Array<Metric> = [{
        "metricName": "AVG",
        "distribution": [1, 0, 2, 0, 0, 0, 0, 3, 0, 4],
        "metricThreshold": 0,
        "comparisons": [
            {   "id": 1,
                "firstSubmissionId": "A",
                "secondSubmissionId": "C",
                "similarity": 0.9966329966329966
            },
            {
                "id": 2,
                "firstSubmissionId": "D",
                "secondSubmissionId": "A",
                "similarity": 0.7787255393878575
            },
            {
                "id": 3,
                "firstSubmissionId": "D",
                "secondSubmissionId": "C",
                "similarity": 0.7787255393878575
            },
            {
                "id": 4,
                "firstSubmissionId": "B",
                "secondSubmissionId": "D",
                "similarity": 0.2827868852459016
            },
            {
                "id": 5,
                "firstSubmissionId": "B",
                "secondSubmissionId": "A",
                "similarity": 0.2457689477557027
            },
            {
                "id": 6,
                "firstSubmissionId": "B",
                "secondSubmissionId": "C",
                "similarity": 0.2457689477557027
            },
            {
                "id": 7,
                "firstSubmissionId": "E",
                "secondSubmissionId": "A",
                "similarity": 0
            },
            {
                "id": 8,
                "firstSubmissionId": "E",
                "secondSubmissionId": "D",
                "similarity": 0
            },
            {
                "id": 9,
                "firstSubmissionId": "E",
                "secondSubmissionId": "B",
                "similarity": 0
            },
            {
                "id": 10,
                "firstSubmissionId": "E",
                "secondSubmissionId": "C",
                "similarity": 0
            }
        ],
        "description": "Trung bình của hai phạm vi chương trình. Đây là một độ tương đồng mặc định mà hoạt động trong hầu hết các trường hợp: Các kết quả trùng khớp với độ tương đồng trung bình cao cho thấy rằng các chương trình hoạt động một cách rất tương tự nhau."
},{
        "metricName": "MAX",
        "distribution": [5, 1, 0, 0, 0, 0, 0, 0, 0, 4],
        "metricThreshold": 0,
        "comparisons": [
            {
                "id": 1,
                "firstSubmissionId": "A",
                "secondSubmissionId": "C",
                "similarity": 0.9966329966329966
            },
            {
                "id": 2,
                "firstSubmissionId": "B",
                "secondSubmissionId": "A",
                "similarity": 0.9766081871345029
            },
            {
                "id": 3,
                "firstSubmissionId": "B",
                "secondSubmissionId": "C",
                "similarity": 0.9766081871345029
            },
            {
                "id": 4,
                "firstSubmissionId": "D",
                "secondSubmissionId": "A",
                "similarity": 0.9639751552795031
            },
            {
                "id": 5,
                "firstSubmissionId": "D",
                "secondSubmissionId": "C",
                "similarity": 0.9639751552795031
            },
            {
                "id": 6,
                "firstSubmissionId": "B",
                "secondSubmissionId": "D",
                "similarity": 0.8070175438596491
            },
            {
                "id": 7,
                "firstSubmissionId": "E",
                "secondSubmissionId": "A",
                "similarity": 0
            },
            {
                "id": 8,
                "firstSubmissionId": "E",
                "secondSubmissionId": "D",
                "similarity": 0
            },
            {
                "id": 9,
                "firstSubmissionId": "E",
                "secondSubmissionId": "B",
                "similarity": 0
            },
            {
                "id": 10,
                "firstSubmissionId": "E",
                "secondSubmissionId": "C",
                "similarity": 0
            }
        ],
        "description": "Giá trị lớn nhất của hai phạm vi chương trình. Bảng xếp hạng này đặc biệt hữu ích khi các chương trình khác nhau rất nhiều về kích thước. Điều này có thể xảy ra khi mã không hoạt động được chèn vào để che đậy nguồn gốc của chương trình bị sao chép."
    }];
    const clusters: Array<Cluster> = [];
    const submissionIdsToComparisonFileName: Map<string,Map<string,string>> = new Map<string, Map<string, string>>();
    const overview: Overview = new Overview(submissionFolderPath,baseCodeFolderPath,language,fileExtensions,matchSensitivity,dateOfExecution,durationOfExecution,metrics,clusters,10,submissionIdsToComparisonFileName);
    expect(overview.language).toMatch("Javac based AST plugin");
    expect(overview.matchSensitivity).toBe(9);
    expect(overview.dateOfExecution).toMatch("20/04/23");
    expect(overview.durationOfExecution).toBe(40);
    expect(overview.metrics.length).toBe(2);
    expect(overview.metrics[0].metricName).toMatch("AVG");
    expect(overview.metrics[1].metricName).toMatch("MAX");
})