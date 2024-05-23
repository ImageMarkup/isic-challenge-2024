---
layout: home
title: "Home"
hide_footer: true

# Hero Text
main_title: The ISIC 2024 Challenge Dataset
sub_title: Including the SLICE-3D training dataset - 400,000 skin lesion image crops extracted from 3D TBP for skin cancer detection
---

# Official training and testing datasets of the ISIC 2024 Challenge

The datasets contains 15mm-by-15mm field-of-view cropped images centered on distinct lesions and are extracted from 3D total body photographs. These images are referred to as “tiles.” The official training dataset for the challenge is the SLICE-3D Dataset: 400,000 skin lesion image crops extracted from 3D TBP for skin cancer detection. The official testing dataset contain tiles from a separate set of patients.

All data was curated by the International Skin Imaging Collaboration (ISIC), and images were contributed from the following sources:
+ Memorial Sloan Kettering Cancer Center (USA)
+ Hospital Clinic de Barcelona (Spain)
+ The University of Queensland (Australia)
+ Medical University of Vienna (Austria)
+ University of Athens (Greece)
+ Melanoma Institute Australia (Australia)
+ University Hospital of Basel (Switzerland)
+ Alfred Hospital (Australia)
+ FNQH Cairns (Australia)

The training and testing datasets were curated for the **[ISIC 2024 Challenge]([https://www.kaggle.com](https://www.kaggle.com/competitions/isic-2024-challenge)** hosted on [Kaggle]([https://www.kaggle.com/](https://www.kaggle.com/competitions/isic-2024-challenge) during the Summer of 2024.

DOI: [PLACEHOLDER](PLACEHOLDER)


| Challenge Dataset | License | Images | Input Metadata | Supplemental Metadata | Ground Truth |
| ------ | ------- | ----------------- | ----------------- | - | - |
| Training ("SLICE-3D") | [CC-BY-NC](https://creativecommons.org/licenses/by-nc/4.0/deed.en) | - | - | - | - |
| Testing | [CC-BY-NC](https://creativecommons.org/licenses/by-nc/4.0/deed.en) | - | - | - | Not available |



<div class="overflow-x-auto">
<table class="table table-zebra table-fixed w-full">
  <thead>
  <tr>
    <th><abbr title="Training Data">Training Data</abbr></th>
    <th><abbr title="Training Ground Truth Data">Training Ground
      Truth</abbr></th>
    <th><abbr title="Test Data">Test Data</abbr></th>
    <th><abbr title="Test Ground Truth Data">Test Ground
      Truth</abbr></th>
    <th><abbr title="License">License</abbr></th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      <a class="track-outbound" href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Training_Dicom.zip">Download DICOM (48.9GB)</a>
      <br>
      33,126 DICOM images with embedded metadata.
      <br>
      <a href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Train_DICOM_corrected.zip">
        Download DICOM Corrected* (23.0GB)
      </a>
      <br>
      33,126 DICOM images with embedded metadata.
      <br>
      <hr>
      <a class="track-outbound" href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Training_JPEG.zip">Download JPEG (23GB)</a>
      <br>
      33,126 JPEG images.
      <br>
      <a class="track-outbound" href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Training_GroundTruth.csv">Download metadata (2MB)</a>
      <br>
      33,126 metadata entries of patient ID, sex, age, and general anatomic site.
      <br>
      <a class="track-outbound" href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Training_GroundTruth_v2.csv">Download metadata v2 (2MB)</a>
      <br>
      33,126 metadata entries of patient ID, lesion ID, sex, age, and general anatomic site.
      <br>
      <a class="track-outbound" href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Training_Duplicates.csv">Download duplicate image list (2MB)</a>
      <br>
      List of 425 duplicates.
    </td>
    <td><a class="track-outbound" href=
        "https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Training_GroundTruth.csv">
      Download (2MB)</a><br>
      33,126 entries of gold standard lesion diagnoses.
    </td>
    <td>
      <a class="track-outbound" href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Test_Dicom.zip">Download DICOM (15.3GB)</a>
      <br>
      10,982 DICOM images with embedded metadata.
      <br>
      <a href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Test_DICOM_corrected.zip">
        Download DICOM Corrected* (6.7GB)
      </a>
      <br>
      10,982 DICOM images with embedded metadata.
      <br>
      <hr>
      <a class="track-outbound" href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Test_JPEG.zip">Download JPEG (6.7GB)</a>
      <br>
      10,982 JPEG images
      <br>
      <a class="track-outbound" href="https://isic-challenge-data.s3.amazonaws.com/2020/ISIC_2020_Test_Metadata.csv">Download metadata (458KB)</a>
      <br>
      10,982 metadata entries of patient ID, sex, age, and general anatomic site.
    </td>
    <td>
      Not Available
    </td>
    <td>
      <a target="_blank" rel="noopener" href=
          "https://creativecommons.org/licenses/by-nc/4.0/">CC-BY-NC</a>
    </td>
  </tr>
  </tbody>
</table>
</div>


# Citing the 2024 dataset:

To comply with the attribution requirements of the [CC-BY-NC license](https://creativecommons.org/licenses/), the aggregate "ISIC 2024" data must be cited as:

<blockquote>
  <p>PLACEHOLDER <i>International Skin Imaging Collaboration</i> <a href="#" rel="noopener" target="_blank">PLACEHOLDER</a>
  (2024).</p>


  <p>Creative Commons Attribution-Non Commercial 4.0 International License.</p>

  <p>The dataset was generated by the International Skin Imaging Collaboration (ISIC)
    and images are from the following sources: Hospital Clínic de Barcelona,
    Medical University of Vienna, Memorial Sloan Kettering Cancer Center,
    Melanoma Institute Australia, The University of Queensland, and the
    University of Athens Medical School.</p>

  <p>You should have received a copy of the license along with this work.</p>

  <p>If not, see <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode.txt"
                    rel="noopener" target="_blank">https://creativecommons.org/licenses/by-nc/4.0/legalcode.txt</a>.
  </p>
</blockquote>


[//]: <> (When referencing this dataset in your own manuscripts and publications, please use the following full citation:)

[//]: <> (blockquote blockquote)

# Organizers

## Sponsors
* ### [The International Skin Imaging Collaboration (ISIC)](https://www.isic-archive.com/#!/topWithHeader/wideContentTop/main)
* ### [Canfield Scientific, Inc.](https://www.canfieldsci.com/)
* ### [Kaggle](https://www.kaggle.com/)

## Challenge Co-Chairs
- Veronica Rotemberg, M.D., Ph.D. (Memorial Sloan Kettering Cancer Center, New York City, NY, USA)
- Nicholas Kurtansky (Memorial Sloan Kettering Cancer Center, New York City, NY, USA)

## Partners

* ### Memorial Sloan Kettering Cancer Center:
    + Jochen Weber
    + Kivanc Kose, Ph.D.
    + Allan Halpern, M.D.
    + Maura Gillis
* ### Hospital Clinic de Barcelona:
    + Josep Malvehy, M.D.      
* ### the University of Queensland:
    + H Peter Soyer, Prof., M.D.      
* ### Medical University of Vienna:
    + Harald Kittler, Prof., M.D.      
* ### University of Athens:
    + Konstantinos Liopyris, M.D.      
* ### Melanoma Institute Australia:
    + Linda K Martin, M.D.
    + Pascale Guitera, M.D.      
* ### University Hospital of Basel:
    + Alexander A Navarini, Prof., M.D.      
* ### Alfred Hospital:
    + Victoria J Mar, M.D.      
* ### FNQH Cairns:
    + Vin Rajeswaran, M.D.





