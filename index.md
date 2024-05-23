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


<div class="overflow-x-auto">

<table class="table is-hoverable is-bordered">
    <thead>
        <tr>
            <th><abbr title="Dataset">Dataset</abbr></th>

            <th><abbr title="Training Data">Training Data</abbr></th>
            <th><abbr title="Training Ground Truth Data">Training Ground Truth</abbr></th>
            <th><abbr title="Test Data">Test Data</abbr></th>
            <th><abbr title="Test Ground Truth Data">Test Ground Truth</abbr></th>
            <th><abbr title="License">License</abbr></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>SLICE-3D</td>
            <td>
                <a href="https://isic-challenge-data.s3.amazonaws.com/2024/ISIC_2024_Training_Input.zip">
                    Download (1.2GB)
                </a>
                <br>
                401,059 JPEG images of skin lesion image crops extracted from 3D TBP with metadata entries of age, sex,
                general anatomic site, common patient identifier, clinical size, and various data fields from the TBP Lesion Visualizer*.
            </td>
            <td>
                <a href="https://isic-challenge-data.s3.amazonaws.com/2019/ISIC_2019_Training_GroundTruth.csv">
                    Download (7MB)
                </a>
                <br>
                401,059 entries of gold standard lesion malignancy values.

            </td>
            <td rowspan="2">
                <a href="https://isic-challenge-data.s3.amazonaws.com/2024/ISIC_2024_Test_Input.zip">
                    Download (1.5GB)
                </a>
                <br>
                511,474 JPEG images of skin lesion image crops extracted from 3D TBP with metadata entries of age, sex,
                general anatomic site, common patient identifier, clinical size, and various data fields from the TBP Lesion Visualizer*.
            </td>
            <td>
                <div>
  <span>
    Not Available
  </span>
  <span class="has-tooltip-right has-tooltip-multiline" data-tooltip="This data isn't available because it's currently being used in a Grand Challenge.">
    <i class="material-icons is-pulled-right">help_outline</i>
  </span>
</div>

            </td>
            <td>
                <a href="https://creativecommons.org/licenses/by-nc/4.0/">
                    CC-BY-NC
                </a>
            </td>
        </tr>
        <tr>
            <td>SLICE-3D Permissive</td>
            <td>
                <a href="https://isic-challenge-data.s3.amazonaws.com/2024/ISIC_2024_Permissive_Training_Input.zip">
                    Download (623MB)
                </a>
                <br>
                217,477 JPEG images of skin lesion image crops extracted from 3D TBP with metadata entries of age, sex,
                general anatomic site, common patient identifier, clinical size, and various data from the TBP Lesion Visualizer*.
            </td>
            <td>
                <a href="https://isic-challenge-data.s3.amazonaws.com/2019/ISIC_2024_Permissive_Training_GroundTruth.csv">
                    Download (4MB)
                </a>
                <br>
                217,477 entries of gold standard lesion malignancy values.

            </td>
            <td>
                <div>
  <span>
    Not Available
  </span>
  <span class="has-tooltip-right has-tooltip-multiline" data-tooltip="This data isn't available because it's currently being used in a Grand Challenge.">
    <i class="material-icons is-pulled-right">help_outline</i>
  </span>
</div>

            </td>
            <td>
                <a href="https://creativecommons.org/licenses/by/4.0/">
                    CC-BY
                </a>
            </td>
        </tr>
    </tbody>
</table>

</div>

<h3>Citing 2024 datasets:</h3>
<h4>SLICE-3D</h4>
To comply with the attribution requirements of the
<a href="https://creativecommons.org/licenses/by-nc/4.0/">
    CC-BY-NC license
</a>,
the aggregate "SLICE-3D" data must be cited as:
<blockquote>
    <p>
        International Skin Imaging Collaboration. SLICE-3D 2024 Challenge Dataset.
        <i>International Skin Imaging Collaboration</i>
        <a href="https://doi.org/10.34970/2024-slice-3d">
          https://doi.org/10.34970/2024-slice-3d
        </a>
        (2024).
    </p>
    <p>
        Creative Commons Attribution-Non Commercial 4.0 International License.
    </p>
    <p>
      The dataset was generated by the International Skin Imaging Collaboration (ISIC) and images are
      from the following sources: Hospital Clínic de Barcelona, Memorial Sloan Kettering Cancer Center,
      Hospital of Basel, FNQH Cairns, The University of Queensland, Melanoma Institute Australia, Monash
      University and Alfred Health, University of Athens Medical School, and Medical University of Vienna.
    </p>
    <p>You should have received a copy of the license along with this work.</p>
    <p>If not, see
        <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode.txt">
            https://creativecommons.org/licenses/by-nc/4.0/legalcode.txt
        </a>.
    </p>
</blockquote>

<h4>SLICE-3D Permissive</h4>
To comply with the attribution requirements of the
<a href="https://creativecommons.org/licenses/by/4.0/">
    CC-BY license
</a>,
the aggregate "SLICE-3D Permissive" data must be cited as:
<blockquote>
    <p>
        International Skin Imaging Collaboration. SLICE-3D 2024 Permissive Challenge Dataset.
        <i>International Skin Imaging Collaboration</i>
        <a href="https://doi.org/10.34970/2024-slice-3d-permissive">
          https://doi.org/10.34970/2024-slice-3d-permissive
        </a>
        (2024).
    </p>
    <p>
        Creative Commons Attribution 4.0 International License.
    </p>
    <p>
      The dataset was generated by the International Skin Imaging Collaboration (ISIC) and images are
      from the following sources: Memorial Sloan Kettering Cancer Center, FNQH Cairns,
      The University of Queensland, Melanoma Institute Australia, and University of Athens Medical School.

    </p>
    <p>You should have received a copy of the license along with this work.</p>
    <p>If not, see
        <a href="https://creativecommons.org/licenses/by/4.0/legalcode.txt">
            https://creativecommons.org/licenses/by/4.0/legalcode.txt
        </a>.
    </p>
</blockquote>

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





