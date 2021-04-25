from django.shortcuts import render

def home(request):
    query = request.GET.get('name')
    message = "El nombre escrito es: {}".format(query)
    template = "home.html"
    context = {
        'message': message,
    }
    return render(request, template, context)

