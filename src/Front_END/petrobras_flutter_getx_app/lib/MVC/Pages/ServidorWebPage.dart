// server_page.dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../Controllers/ServerController.dart';

class ServidorPage extends StatelessWidget {
  final controller = Get.put(ServerController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("ServidorPage"),
      ),
      body: Center(
        child: Column(
          children: [
            Obx(() {
              if (controller.selectedFile.value != null) {
                return Text(controller.selectedFile.value!.path);
              } else {
                return Text("Nenhum arquivo selecionado");
              }
            }),
            ElevatedButton(
              onPressed: controller.selectAndUploadFile,
              child: Text("Selecionar e Enviar Arquivo"),
            )
          ],
        ),
      ),
    );
  }
}
