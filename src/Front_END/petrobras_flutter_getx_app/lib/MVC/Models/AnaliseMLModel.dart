// model.dart
import 'package:dio/dio.dart';
import 'dart:io';

class FileUploadModel {
  final dio = Dio();

  Future<void> uploadFile(File file) async {
    FormData formData = FormData.fromMap({
      "file": await MultipartFile.fromFile(file.path,
          filename: file.path.split("/").last)
    });

    try {
      var response =
          await dio.post('YOUR_FASTAPI_ENDPOINT/upload/', data: formData);
      if (response.statusCode == 200) {
        print("Upload successful");
      } else {
        print("Upload failed");
      }
    } catch (e) {
      print(e);
    }
  }
}
