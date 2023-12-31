# Generated by Django 4.2.2 on 2023-07-04 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("listings", "0004_listing_picture"),
    ]

    operations = [
        migrations.AlterField(
            model_name="listing",
            name="picture",
            field=models.ImageField(
                blank=True, null=True, upload_to="pictures/%Y/%m/%d/"
            ),
        ),
    ]
