# Generated by Django 2.1.7 on 2020-12-03 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Aluno',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('profissao', models.CharField(max_length=200)),
                ('ano_nasc', models.PositiveSmallIntegerField()),
                ('ativo', models.BooleanField(default=True)),
            ],
        ),
    ]
