// server_controller.dart
import 'package:get/get.dart';
import 'dart:io';

import 'package:petrobras_flutter_getx_app/MVC/Models/AnaliseMLModel.dart';

class ServerController extends GetxController {
  final FileUploadModel fileUploadModel = FileUploadModel();
  var selectedFile = Rx<File?>(null);

  void selectAndUploadFile() async {
    // Use o image_picker ou outro pacote para selecionar um arquivo
    // Por exemplo:
    // final pickedFile = await ImagePicker().pickImage(source: ImageSource.gallery);
    // if (pickedFile != null) {
    //   selectedFile.value = File(pickedFile.path);
    //   uploadFile();
    // }

    // Para este exemplo, assumiremos que você já tem um arquivo selecionado e está armazenado em selectedFile
    uploadFile();
  }

  void uploadFile() {
    if (selectedFile.value != null) {
      fileUploadModel.uploadFile(selectedFile.value!);
    }
  }
}
